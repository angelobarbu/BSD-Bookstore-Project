import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export function LoginForm({
                            className,
                            ...props
                          }: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/"); // Redirect to home page or another page
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Base64 encode email and password for Authorization header
    const authHeader = `Basic ${email}:${password}`;

    try {
      const response = await fetch("http://127.0.0.1:30201/login", {
        method: "POST",
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // Assuming the response contains the token
      const token = data.token;
      if (!token) {
        throw new Error("No token returned");
      }

      // Save the token to localStorage
      localStorage.setItem("authToken", token);

      console.log("Login successful:", data);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register">
                  <p className="underline underline-offset-4">Sign up</p>
                </Link>
              </div>
              {error && <p className="mt-4 text-red-600">{error}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
  );
}
