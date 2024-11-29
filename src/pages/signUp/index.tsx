import React from "react";
import { Input } from "../../components/ui/input"
import { cn } from "../../lib/utils";
import { Link} from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Button, buttonVariants } from "../../components/ui/button";
import { AuthShell } from "@/components/authForm";

export const SignUp: React.FC = () => {
  
    const {
      register: formRegister,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
    // const { mutate: handleRegister } = useMutation({
    //   mutationKey: ["register"],
    //   mutationFn: async (data: { email: string; password: string }) => {
    //     return register(data.email, data.password);
    //   },
    //   onSuccess: () => alert("Registration successful! Check your email to confirm."),
    //   onError: (error: any) => alert(`Registration failed: ${error.message}`),
    // });
    
  
    const onSubmit = (data: any) => {
        console.log(data); 
      };
    return (
        <AuthShell>
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up for Connection</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">Create your account to start connection</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                placeholder="Ann Jams"
                {...formRegister("name", {
                  required: "Name is required",
                  minLength: { value: 3, message: "Name must be at least 3 characters" },
                  maxLength: { value: 20, message: "Name must be less than 20 characters" },
                })}
              />
              {errors.name && <p className="text-red-800 text-sm">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                placeholder="Ann@example.com"
                {...formRegister("email", {
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
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...formRegister("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Password must be at least 8 characters" },
                })}
              />
              {errors.password && <p className="text-red-800 text-sm">{errors.password.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                {...formRegister("confirmPassword", {
                  required: "Please confirm your password",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-800 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className={cn(buttonVariants({ variant: "auth", size: "lg" }), )}
            >
              Sign Up
            </Button>
          </form>
          <div className="flex justify-between mt-4 text-sm">
            <span>Already have an account?</span>
            <Link to="/signin" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </div>
        </AuthShell>
      
    );
  };