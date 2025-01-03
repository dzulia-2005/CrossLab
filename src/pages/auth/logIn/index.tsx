import React from "react";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { AuthShell } from "@/components/authForm";
import { SignInSchema } from "@/pages/auth/logIn/schema";
import { afterSignInSuccess } from "@/pages/auth/logIn/utils";
import { useSignIn } from "@/react-query/mutation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { SignInPayload } from "@/api/auth/index.types";
import { queryClient } from "@/main";
import { useAtom } from "jotai";
import { userAtom } from "@/store";
type SignInFormValues = SignInPayload["payload"];

const signInFormDefaultValues: SignInFormValues = {
  username: "",
  password: "",
};

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: signInFormDefaultValues,
    resolver: zodResolver(SignInSchema),
  });

  const { mutate: handleSignIn } = useSignIn();

  const onSubmit = (signInPayload: SignInFormValues) => {
    handleSignIn(
      { payload: signInPayload },
      {
        onSuccess: (res) => {
          setUser(true);
          console.log("onSuccess:", userAtom);

          afterSignInSuccess({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          });
          navigate("/home");
          console.log("hi Iza, how are you doing? Recover soon :)");

          queryClient.invalidateQueries({ queryKey: ["me"] });
        },
      }
    );
  };

  return (
    <AuthShell>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Log in to Connection
      </h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Enter your credentials to access your account
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email">Username</label>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder="Ann@example.com"
                />
              );
            }}
          />
          {errors.username && (
            <p className="text-red-800 text-sm">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  type="password"
                  onChange={onChange}
                  value={value}
                  placeholder="Enter your password"
                />
              );
            }}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          className={cn(buttonVariants({ variant: "auth", size: "lg" }))}
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
