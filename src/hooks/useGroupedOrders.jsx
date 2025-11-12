// Fro grouping order data from the server, I need this function in 2 places, so a hook makes sance.

import { getOrders } from "@/services/apiNewOrders";
import useRestaurantId from "./useRestaurantId";
import { useQuery } from "@tanstack/react-query";

// in data, out grouped data
function useGroupedOrders(orderId, type) {
  const restId = useRestaurantId();

  // Load the new orders from server.
  const { data, isLoading } = useQuery({
    queryKey: ["new-orders", { restId, type, orderId }],
    queryFn: getOrders,
    enabled: !!restId || !!orderId,
  });

  const newOrders = data || [];

  const groupedOrders = Object.values(
    newOrders?.reduce((acc, curr) => {
      const {
        order_id,
        id,
        created_at,
        user_id,
        restaurant_id,
        status,
        address_id,
        rider_id,
        order_code,
        withdraw,
      } = curr;

      // If this order_id hasn't been added yet, create the base structure
      if (!acc[order_id]) {
        acc[order_id] = {
          id,
          created_at,
          order_id,
          user_id,
          restaurant_id,
          status,
          address_id,
          rider_id,
          order_code,
          withdraw,
          items: [], // to hold all items for this order
        };
      }

      // Push the current item's details into the items array
      acc[order_id]?.items?.push({
        item_id: curr.item_id,
        coupon_id: curr.coupon_id,
        coupon: curr.coupon,
        total_price: curr.total_price,
        quantity: curr.quantity,
        title: curr.title,
      });

      return acc;
    }, {})
  );

  return { groupedOrders, isLoading };
}

export default useGroupedOrders;
