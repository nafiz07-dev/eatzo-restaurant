import { getItem } from "@/services/apiNewOrders";
import { useQuery } from "@tanstack/react-query";

// get the data for an item with itemId
function useItem(itemId) {
  const { data, isLoading } = useQuery({
    queryKey: ["item", itemId],
    queryFn: getItem,
    enabled: !!itemId,
  });

  return { data, isLoading };
}

export default useItem;
