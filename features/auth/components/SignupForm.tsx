"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { signupAction } from "@/features/auth/actions";
import { signupSchema, type SignupSchema } from "@/schemas/auth-schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: SignupSchema) {
    const result = await signupAction(data);

    if (!result.success) {
      if (result.errors) {
        Object.entries(result.errors).forEach(([field, messages]) => {
          if (messages?.[0]) {
            setError(field as keyof SignupSchema, {
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
    toast.success("Account created successfully!");
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border bg-white p-8 shadow-sm"
    >
      {errors.root && (
        <p className="text-sm text-red-500">{errors.root.message}</p>
      )}

      <div className="space-y-2">
        <label htmlFor="fullName">Full Name</label>

        <Input
          id="fullName"
          placeholder="John Doe"
          {...register("fullName")}
        />

        {errors.fullName && (
          <p className="text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

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

      <div className="space-y-2">
        <label htmlFor="password">Password</label>

        <Input
          id="password"
          type="password"
          placeholder="********"
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
          placeholder="********"
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
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
}