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
  email: "",
  fullName: "",
  password: "",
  confirmPassword: "",
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
    handleSignUp(
      { payload: signUpPayload },
      {
        onSuccess: () => {
          navigate("/login");
        },
      },
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
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Controller
          control={control}
          name="fullName"
          render={({ field: {onChange,  value } }) => {
            return (
              <Input
                onChange={onChange}
                value={value}
                placeholder="Ann Jamth"
              />
            );
          }}
        />
        {errors.fullName && (
            <p className="text-red-800 text-sm">{errors.fullName.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
              onChange={onChange}
              value={value}
              placeholder="Ann@example.com" />
            );
          }}
        />
        {errors.email && (
            <p className="text-red-800 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Enter your password" />
            );
          }}
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
          render={({ field: { onChange, value } }) => {
            return (
              <Input onChange={onChange} value={value} placeholder="Confirm your passwordd" />
            );
          }}
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



