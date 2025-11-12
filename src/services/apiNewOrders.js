import supabase from "./supabase";

// Geting all tha orders that is pending right now.
export async function getOrders({ queryKey }) {
  const [_key, { restId, type, orderId }] = queryKey;
  // type is for making this function and its useGroupedOrders hook reusable for viewing an order using order id.

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("restaurant_id", restId)
    .eq("status", "pending")
    .eq("withdraw", false);

  if (type === "view") {
    console.log("View is exicuting");

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("restaurant_id", restId)
      .eq("order_id", orderId)
      .eq("withdraw", false);

    if (error) throw new Error("Error while fetching orders.");

    return data;
  }

  if (error) throw new Error("Error while fetching orders.");

  return data;
}

// Getting the item photo mainly for child cards of order card.
export async function getItem({ queryKey }) {
  const [_key, restId] = queryKey;

  const { data, error } = await supabase
    .from("menu_item")
    .select("*")
    .eq("id", restId);

  if (error) throw new Error("Error while fetching orders.");

  return data;
}

// Accepting & Canceling orders
export async function acceptOrder(payload) {
  const { orderId, status } = payload;

  const { error } = await supabase
    .from("orders")
    .update({ status: status })
    .eq("order_id", orderId)
    .select();
  if (error) throw new Error("Error while fetching orders.");
}

/*

// for order management: 
const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("restaurant_id", restId)
      .eq("order_id", orderId)
      .eq("withdraw", false)
      .in("status", [
        "accepted",
        "on queue",
        "prepearing",
        "waiting for rider",
      ]);


*/
