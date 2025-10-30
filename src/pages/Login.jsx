import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import eatzoLogo from "../asets/eatzo-transparent.png";
import FadeinBox from "@/motion/FadeinBox";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/login";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("demo@therends.com");
  const [password, setPassword] = useState("demo@1234");

  const { data: userT } = useUser();
  const isAuthenticated = userT?.role === "authenticated";

  // If user gets back to login page wile logged in then redirect them to dashboard
  useEffect(
    function () {
      if (isAuthenticated) navigate("/dashboard");
    },
    [isAuthenticated, navigate]
  );

  // send data to the server
  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: () => {
      toast.success("Logged in");
      navigate("/dashboard");
    },
    onError: () => toast.error("Please input valid credentials"),
  });

  // handle the login
  function handleLogin() {
    if (!username && !password) toast.error("Please input credentials!!");
    mutate({ email: username, password });
  }

  return (
    <div className="flex  justify-center mt-20 w-full">
      <div>
        <FadeinBox delay={0.2}>
          <Card className="w-80">
            <CardHeader>
              <div className="flex flex-col items-center gap-5 w-full">
                <img src={eatzoLogo} alt="eatzo logo" className="w-30" />
                <CardTitle className="">Login to your Restaurant</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Input
                type="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Pasword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={handleLogin}
                disabled={isPending}
              >
                {isPending && <Spinner />}
                Login
              </Button>
            </CardFooter>
          </Card>
        </FadeinBox>
        <p className="text-center mt-20 opacity-50">Powered by System03</p>
      </div>
    </div>
  );
}

export default Login;
