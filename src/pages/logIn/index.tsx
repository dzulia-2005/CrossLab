import React from "react";
import { Input } from "../../components/ui/input"
import { Button, buttonVariants } from "../../components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useMutation} from "@tanstack/react-query";
// import { login } from "@/supabase/auth";
import { useForm } from "react-hook-form";
import { AuthShell } from "@/components/authForm";
import { login } from "@/api/logIn";

const SignIn: React.FC = () => {
    const navigate = useNavigate();
  
    const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    const { mutate: handleLogin } = useMutation({
      mutationKey: ["login"],
      mutationFn: login,
      onSuccess: () => navigate("/home"),
    });
  
    const onSubmit = (data: any) => {
      handleLogin({ email: data.email, password: data.password });
    };

    return (
        
        <AuthShell>
             <h2 className="text-2xl font-bold mb-4 text-center">Log in to Connection</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              placeholder="Ann@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="text-red-800 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <Button
            type="submit"
            className={cn(buttonVariants({ variant: "auth", size: "lg" }),)}
          >
            Log In
          </Button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <span>Don't have an account?</span>
          <Link to="/" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
        </AuthShell>
    );
};

export default SignIn;