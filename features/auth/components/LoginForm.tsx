"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { loginAction } from "@/features/auth/actions";
import { loginSchema, type LoginSchema } from "@/schemas/auth-schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    const result = await loginAction(data);

    if (!result.success) {
      if (result.errors) {
        Object.entries(result.errors).forEach(([field, messages]) => {
          if (messages?.[0]) {
            setError(field as keyof LoginSchema, {
              message: messages[0],
            });
          }
        });

        return;
      }

      setError("root", {
        message: result.message,
      });
      toast.error(result.message);
      return;
    }

    toast.success("Welcome back!");
    router.push("/dashboard");
    router.refresh();
  } 

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border p-8 shadow-sm"
    >
      {errors.root && (
        <p className="text-sm text-red-500">
          {errors.root.message}
        </p>
      )}

      <div className="space-y-2">
        <label htmlFor="email">Email</label>

        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="password">Password</label>

        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}