"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Check } from "lucide-react";

import { forgotPasswordAction } from "@/features/auth/actions";
import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from "@/schemas/auth-schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ForgotPasswordForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const emailValue = watch("email");

  async function onSubmit(data: ForgotPasswordSchema) {
    const result = await forgotPasswordAction(data);

    if (!result.success) {
      setError("root", {
        message: result.message,
      });

      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <div className="flex flex-col items-center gap-4 p-6 sm:p-8">
        <div className="rounded-full bg-success/10 p-3">
          <Check className="size-5 text-success" />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="font-semibold">Check your email</h3>
          <p className="text-sm text-muted-foreground">
            We sent a password reset link to{" "}
            <span className="font-medium text-foreground">{emailValue}</span>
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          render={<Link href="/auth/login" />}
          className="mt-2 w-full"
        >
          Back to Login
        </Button>
      </div>
    );
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

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register("email")}
            className={`pl-9 ${errors.email ? "border-destructive" : ""}`}
          />
          <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </div>
        {errors.email && (
          <p className="text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="bg-brand text-brand-foreground hover:bg-brand/90 h-9 w-full font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Reset Link"}
      </Button>

      <Link href="/login" className="w-full">
        <Button
          variant="ghost"
          className="w-full"
        >
        Back to Login
        </Button>
      </Link>
    </form>
  );
}
