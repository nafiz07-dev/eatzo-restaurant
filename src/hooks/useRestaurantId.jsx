import { useQuery } from "@tanstack/react-query";
import { useUser } from "./useUser";
import supabase from "@/services/supabase";

//////////////////////
// the userid from account session is not the restaurant account, and not id that is everywhere as the restaurant. its on the restaurant table, that
// - have an column named account.
// - this account column is a uuid that is from authentication.
// - this account id is what connects restaurant with authenticated email.
// - fetch and get the restaurant id where the column account matches to current user. and this hook will be used everywhere to get restuarant id.

function useRestaurantId() {
  const { data: user } = useUser();
  const userId = user?.id;

  const { data: restId } = useQuery({
    queryKey: ["restId"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("restaurant")
        .select("id")
        .eq("account", userId);
      if (error) throw new Error("Error while fetching restaurant id");
      return data;
    },
    enabled: !!userId,
  });

  return restId?.[0].id;
}

export default useRestaurantId;
