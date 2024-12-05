import React from "react";
import { Input } from "../../../components/ui/input";
import { cn } from "../../../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button, buttonVariants } from "../../../components/ui/button";
import { AuthShell } from "@/components/authForm";
import { SignUpPayload } from "@/api/auth/index.types";
import { useSignUp } from "@/react-query/mutation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "./schema";

type SignUpFormValues = SignUpPayload["payload"];

const signUpFormDefaultValues: SignUpFormValues = {
  username: "",
  password: "",
  confirmPassword: "",
  // first_name: "",
  // last_name: "",
  // email: "",
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: signUpFormDefaultValues,
    resolver: zodResolver(SignUpSchema),
  });

  const { mutate: handleSignUp } = useSignUp();

  const onSubmit = (signUpPayload: SignUpFormValues) => {
    console.log("Submitting sign-up with payload:", signUpPayload); // log to check the payload

    handleSignUp(
      { payload: signUpPayload },
      {
        onSuccess: () => {
          console.log("Sign-up success, navigating to login");

          navigate("/login");
        },
        onError: (error) => {
          console.error("Sign-up failed:", error);
        },
      }
    );
  };

  return (
    <AuthShell>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Sign Up for Connection
      </h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Create your account to start connection
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label> */}
        {/* <Controller
            control={control}
            name="first_name"
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                placeholder="First Name"
              />
            )}
          />
          {errors.first_name && (
            <p className="text-red-800 text-sm">{errors.first_name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="block text-sm font-medium mb-1">
            Last Name
          </label>
          <Controller
            control={control}
            name="last_name"
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Last Name"
              />
            )}
          />
          {errors.last_name && (
            <p className="text-red-800 text-sm">{errors.last_name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                type="email"
                onChange={onChange}
                value={value}
                placeholder="Email"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-800 text-sm">{errors.email.message}</p>
          )}
        </div> */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username
          </label>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <Input onChange={onChange} value={value} placeholder="Username" />
            )}
          />
          <label htmlFor="Password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                type="password"
                onChange={onChange}
                value={value}
                placeholder="Enter your password"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-800 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-1"
          >
            Confirm Password
          </label>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                type="password"
                onChange={onChange}
                value={value}
                placeholder="Confirm your password"
              />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-800 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          className={cn(buttonVariants({ variant: "auth", size: "lg" }))}
        >
          Sign Up
        </Button>
      </form>
      <div className="flex justify-between mt-4 text-sm">
        <span>Already have an account?</span>
        <Link to="/sign-in" className="text-blue-500 hover:underline">
          Log In
        </Link>
      </div>
    </AuthShell>
  );
};

export default SignUp;
