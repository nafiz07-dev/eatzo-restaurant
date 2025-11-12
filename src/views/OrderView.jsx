import { Card, CardHeader } from "@/components/ui/card";
import OrderItemCard from "@/features/Orders/OrderItemCard";
import useGroupedOrders from "@/hooks/useGroupedOrders";
import FadeinBox from "@/motion/FadeinBox";
import CenterDiv from "@/ui/CenterDiv";
import GoBack from "@/ui/GoBack";
import Header from "@/ui/Header";
import { useParams } from "react-router-dom";

/*

[
    {
        "id": "3670a177-4493-4823-b233-9b72e2ba3240",
        "created_at": "2025-11-11T14:56:31.66365+00:00",
        "order_id": "8e7adf76-f6c2-495e-b4bc-69cfc2ce4abd",
        "user_id": "465b6b25-38e5-4a62-9877-3bd4baf0e3c3",
        "restaurant_id": "abfc83ac-ae9a-4b06-99ec-a84728eb7691",
        "status": "pending",
        "address_id": "a0a0354e-0179-4d66-9b94-0fa13ecea9f4",
        "rider_id": null,
        "order_code": "120906",
        "withdraw": false,
        "items": [
            {
                "item_id": "80085ebd-39be-4fe4-97fa-3e7c15d9f663",
                "coupon_id": null,
                "coupon": null,
                "total_price": 675,
                "quantity": 3,
                "title": "Kacchi Biryani"
            },
            {
                "item_id": "2cb84cf4-4218-4f36-9f8e-cbe43feb4856",
                "coupon_id": null,
                "coupon": null,
                "total_price": 715,
                "quantity": 1,
                "title": "Pizza Mozerella"
            }
        ]
    }
]

*/

function OrderView() {
  const { orderId } = useParams();
  // console.log(orderId);

  // load the order data.
  const { groupedOrders, isLoading } = useGroupedOrders(orderId, "view");

  const groupedItem = groupedOrders?.[0];

  const items = groupedItem?.items;

  console.log(groupedOrders);

  return (
    <CenterDiv>
      <GoBack />
      <FadeinBox>
        {items?.map((item, key) => (
          <OrderItemCard key={key} item={item} />
        ))}
      </FadeinBox>
      <FadeinBox>
        <Header type="small">Summary</Header>
      </FadeinBox>
    </CenterDiv>
  );
}

export default OrderView;
