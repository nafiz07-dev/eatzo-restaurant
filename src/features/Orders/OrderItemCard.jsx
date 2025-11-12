import useItem from "@/hooks/useItem";
import { Skeleton } from "@/components/ui/skeleton";

function OrderItemCard({ item }) {
  const coupon = item?.coupon;
  const quantity = item?.quantity;
  const price = item?.total_price;
  const itemId = item?.item_id;
  const title = item?.title;

  // Load the data for Item
  const { data, isLoading } = useItem(itemId);
  const itemData = data?.[0];
  const image = itemData?.image;

  return (
    <div
      className={`border border-gray-200 flex gap-2 mb-2 rounded-md overflow-hidden `}
    >
      {isLoading ? (
        <Skeleton className="w-22 h-22" />
      ) : (
        <img src={image} alt={title} className="w-22 h-22 object-cover" />
      )}
      <div className="flex flex-1 justify-between">
        <div className="flex-1 flex flex-col justify-between py-1">
          <div className="flex justify-between">
            <div className="text-[17px] font-[450]">{title}</div>
          </div>
          <div>
            <div className="flex gap-1 opacity-50 font-light text-sm">
              {coupon && <p>"{coupon}" coupon is applied</p>}
            </div>
            <div className="mt-0.5">
              <div>
                <span className="text-[15px] font-medium text-green-800">
                  ৳{price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-3 gap-3">
          <span className="opacity-50">x{quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderItemCard;
