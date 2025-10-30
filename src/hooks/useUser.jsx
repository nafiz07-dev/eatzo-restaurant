import { logout } from "@/services/login";
import supabase from "@/services/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

// For now, this is Ai generated.
export function useUser() {
  const queryClient = useQueryClient();

  // 🔁 Refresh the query when auth state changes
  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(() => {
      queryClient.invalidateQueries(["user"]);
    });
    return () => subscription?.subscription.unsubscribe();
  }, [queryClient]);

  // 🧠 Query that gets the current user
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) throw new Error(error.message);
      return user;
    },
  });

  return userQuery; // gives you { data, error, isLoading, ... }
}

export function useLogout() {
  const { mutate } = useMutation({
    mutationFn: logout,
  });
  return { mutate };
}
