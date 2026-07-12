"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "@/schemas/auth-schema";

import { updatePasswordAction } from "@/features/auth/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordVisibilityToggle } from "@/components/common/PasswordVisibilityToggle";
import { PasswordStrengthIndicator } from "@/components/common/PasswordStrengthIndicator";

export function ResetPasswordForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

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
      className="flex flex-col gap-6 p-6 sm:p-8"
    >
      {errors.root && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950/20 dark:text-red-400">
          {errors.root.message}
        </div>
      )}

      <div className="space-y-3">
        <label htmlFor="password" className="text-sm font-medium">
          New Password
        </label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("password")}
            className={`pr-10 ${errors.password ? "border-destructive" : ""}`}
          />
          <PasswordVisibilityToggle
            isVisible={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
          />
        </div>
        {errors.password && (
          <p className="text-xs text-destructive">
            {errors.password.message}
          </p>
        )}
        {password && <PasswordStrengthIndicator password={password} />}
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="text-sm font-medium">
          Confirm Password
        </label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("confirmPassword")}
            className={`pr-10 ${errors.confirmPassword ? "border-destructive" : ""}`}
          />
          <PasswordVisibilityToggle
            isVisible={showConfirmPassword}
            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-xs text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-brand text-brand-foreground hover:bg-brand/90 h-9 w-full font-medium"
      >
        {isSubmitting ? "Updating..." : "Update Password"}
      </Button>
    </form>
  );
}
