import { Spinner } from "@/components/ui/spinner";
import { useUser } from "@/hooks/useUser";
import { getRestaurant } from "@/services/login";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // get the current user
  const { data: user, isLoading } = useUser();
  const userId = user?.id;

  const isAuthenticated = user?.role === "authenticated";

  // Check if the user is a valid restaurant. right now the authentication will be valid with any account, wether rider or customer.
  const { data: restaurant } = useQuery({
    queryKey: ["restaurant", userId],
    queryFn: getRestaurant,
    enabled: !!userId,
  });

  const isValidRestaurant = restaurant?.[0]?.user_id === user?.id;

  // Check if the user is authenticated.
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && !isValidRestaurant) navigate("/");
    },
    [isAuthenticated, isLoading, navigate, isValidRestaurant]
  );

  // if loading then show this.
  if (isLoading)
    return (
      <div className="flex justify-center mt-50">
        <Spinner className="size-10" />
      </div>
    );

  if (isAuthenticated && isValidRestaurant) return children;
}

export default ProtectedRoute;
