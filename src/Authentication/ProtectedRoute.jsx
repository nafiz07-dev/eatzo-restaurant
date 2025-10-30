import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // get the current user
  const { data: user, isLoading } = useUser();
  const isAuthenticated = user?.role === "authenticated";

  // Check if the user is authenticated.
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // if loading then show this.
  if (isLoading) return;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
