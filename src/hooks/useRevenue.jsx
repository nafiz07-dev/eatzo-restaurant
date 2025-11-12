import { useQuery } from "@tanstack/react-query";
import useRestaurantId from "./useRestaurantId";
import { getRevenue } from "@/services/apiDashboard";

function useRevenue() {
  const restId = useRestaurantId();

  //// fetch data for Revenue:
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard-revenue", { restId }],
    queryFn: getRevenue,
    enabled: !!restId,
  });

  const revenue = data?.reduce((acc, cur) => acc + cur.total_price, 0);

  return { revenue, isLoading };
}

export default useRevenue;
