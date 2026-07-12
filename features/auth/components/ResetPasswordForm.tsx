"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "@/schemas/auth-schema";

import { updatePasswordAction } from "@/features/auth/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ResetPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: ResetPasswordSchema) {
    const result = await updatePasswordAction(data);

    if (!result.success) {
      setError("root", {
        message: result.message,
      });

      return;
    }

    reset();

    router.push("/login");
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
        <label htmlFor="password">
          New Password
        </label>

        <Input
          id="password"
          type="password"
          {...register("password")}
        />

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmPassword">
          Confirm Password
        </label>

        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting
          ? "Updating..."
          : "Update Password"}
      </Button>
    </form>
  );
}