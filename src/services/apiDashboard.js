import supabase from "./supabase";

export async function getRevenue({ queryKey }) {
  const [_key, payload] = queryKey;
  const { restId } = payload;

  const { data, error } = await supabase
    .from("orders")
    .select("total_price")
    .eq("restaurant_id", restId)
    .eq("status", "delivered")
    .eq("withdraw", false);

  if (error) throw new Error("error while fetching revenue for dashboard");

  return data;
}

export async function getNewOrders({ queryKey }) {
  const [_key, payload] = queryKey;
  const { restId } = payload;

  // just for counting how many of them are there. thats why just getting the id.
  const { data, error } = await supabase
    .from("orders")
    .select("id")
    .eq("restaurant_id", restId)
    .eq("status", "pending")
    .eq("withdraw", false);

  if (error) throw new Error("error while fetching revenue for dashboard");

  return data;
}

///////////////////////////////////////////////////////////
//  set the type of selection to do from query:
/*
 const [canceledOrdersFilter, setCanceledOrdersFilter] = useState("Today");

  const { data: CanceledOrders, isLoading: isLoadingCanceledOrders } = useQuery(
    {
      queryKey: [
        "dashboard-canceled-orders",
        { restId, filterBy: canceledOrdersFilter },
      ],
      queryFn: getCanceledOrders,
      enabled: !!restId,
    }
  );

  const numOfCanceledOrders = CanceledOrders?.length;
*/
// For completed orders, prepearing order, canceled order and review.
export async function getStatsOfOrder({ queryKey }) {
  const [_key, payload] = queryKey;
  const { restId, filterBy, type, ratings } = payload;

  // ChatGPT:
  const now = new Date();

  let startDate, endDate;

  switch (filterBy) {
    case "Today":
      startDate = new Date(now.setHours(0, 0, 0, 0));
      endDate = new Date(now.setHours(23, 59, 59, 999));
      break;

    case "This Week": {
      const dayOfWeek = now.getDay(); // 0 = Sunday
      const diffToMonday = (dayOfWeek + 6) % 7; // Monday = start
      startDate = new Date(now);
      startDate.setDate(now.getDate() - diffToMonday);
      startDate.setHours(0, 0, 0, 0);

      endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 7);
      break;
    }

    case "This Month":
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      break;

    case "All Time":
      break;

    default:
      throw new Error("Invalid filter. Use 'today', 'week' or 'month'.");
  }

  // just for counting how many of them are there. thats why just getting the id.
  let query = supabase
    .from("orders")
    .select("created_at")
    .eq("restaurant_id", restId)
    .eq("status", type)
    .eq("withdraw", false);

  if (filterBy !== "All Time") {
    query = query
      .gte("created_at", startDate.toISOString())
      .lt("created_at", endDate.toISOString());
  }

  const { data, error } = await query;

  if (error) throw new Error("error while fetching revenue for dashboard");

  // for making this function usable for review in dashboard.
  if (ratings) {
    let query = supabase
      .from("ratings")
      .select("created_at")
      .eq("restaurant_id", restId);

    if (filterBy !== "All Time") {
      query = query
        .gte("created_at", startDate.toISOString())
        .lt("created_at", endDate.toISOString());
    }

    const { data, error } = await query;

    if (error) throw new Error("error while fetching revenue for dashboard");

    return data;
  }

  return data;
}

// I need to display most sold items as of this month.
// filterout in this month: who ever has order is delivered, is in this month, is have same id.

export async function getMostSoldItems({ queryKey }) {
  const [_key, payload] = queryKey;
  const { restId, filterBy, type } = payload;

  // ChatGPT:
  const now = new Date();

  let startDate, endDate;

  switch (filterBy) {
    case "Today":
      startDate = new Date(now.setHours(0, 0, 0, 0));
      endDate = new Date(now.setHours(23, 59, 59, 999));
      break;

    case "This Week": {
      const dayOfWeek = now.getDay(); // 0 = Sunday
      const diffToMonday = (dayOfWeek + 6) % 7; // Monday = start
      startDate = new Date(now);
      startDate.setDate(now.getDate() - diffToMonday);
      startDate.setHours(0, 0, 0, 0);

      endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 7);
      break;
    }

    case "This Month":
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      break;

    case "All Time":
      break;

    default:
      throw new Error("Invalid filter. Use 'today', 'week' or 'month'.");
  }

  // for bar chart and making this one reusable.
  if (type === "bars") {
    let query = supabase
      .from("orders")
      .select("created_at")
      .eq("restaurant_id", restId)
      .eq("status", "delivered");

    // setting this week on query call will do the trick.
    if (filterBy !== "All Time") {
      query = query
        .gte("created_at", startDate.toISOString())
        .lt("created_at", endDate.toISOString());
    }

    const { data, error } = await query;

    if (error) throw new Error("error while fetching");

    return data;
  }

  // just for counting how many of them are there. thats why just getting the id.
  let query = supabase
    .from("orders")
    .select("title, item_id")
    .eq("restaurant_id", restId)
    .eq("status", "delivered");

  if (filterBy !== "All Time") {
    query = query
      .gte("created_at", startDate.toISOString())
      .lt("created_at", endDate.toISOString());
  }

  const { data, error } = await query;

  if (error) throw new Error("error while fetching");

  return data;
}
