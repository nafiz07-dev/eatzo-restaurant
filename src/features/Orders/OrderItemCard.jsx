import food1 from "../../asets/home-food/food1.jpg";

function OrderItemCard() {
  const image = food1;
  const title = "Pao vaji ";
  const price = 200;
  const coupon = "Any";
  const quantity = 2;

  return (
    <div
      className={`border border-gray-200 flex gap-2 mb-2 rounded-md overflow-hidden `}
    >
      <img src={image} alt={title} className="w-22 h-22 object-cover" />
      <div className="flex flex-1 justify-between">
        <div className="flex-1 flex flex-col justify-between py-1">
          <div className="flex justify-between">
            <div className="text-[17px] font-[450]">{title}</div>
          </div>
          <div>
            <div className="flex gap-1 opacity-50 font-light text-sm">
              <p>"{coupon}" coupon is applied</p>
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
