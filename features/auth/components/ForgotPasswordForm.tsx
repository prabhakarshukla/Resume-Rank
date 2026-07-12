"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { forgotPasswordAction } from "@/features/auth/actions";
import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from "@/schemas/auth-schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: ForgotPasswordSchema) {
    const result = await forgotPasswordAction(data);

    if (!result.success) {
      setError("root", {
        message: result.message,
      });
      toast.error(result.message);
      return;
    }

    reset();

    toast.success("Password reset email sent successfully.");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border bg-white p-8 shadow-sm"
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
          placeholder="john@example.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Sending..."
          : "Send Reset Link"}
      </Button>
    </form>
  );
}