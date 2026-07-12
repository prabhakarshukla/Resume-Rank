"use client";

type PasswordStrengthIndicatorProps = {
  password: string;
};

function getPasswordStrength(password: string) {
  let strength = 0;
  
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z\d]/.test(password)) strength++;

  if (strength <= 1) return { level: "weak", label: "Weak", color: "bg-red-500" };
  if (strength === 2) return { level: "fair", label: "Fair", color: "bg-yellow-500" };
  if (strength === 3) return { level: "good", label: "Good", color: "bg-blue-500" };
  return { level: "strong", label: "Strong", color: "bg-green-500" };
}

export function PasswordStrengthIndicator({
  password,
}: PasswordStrengthIndicatorProps) {
  if (!password) return null;

  const { label, color } = getPasswordStrength(password);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          Password strength
        </span>
        <span className={`text-xs font-medium ${
          color === "bg-red-500" ? "text-red-600 dark:text-red-400" :
          color === "bg-yellow-500" ? "text-yellow-600 dark:text-yellow-400" :
          color === "bg-blue-500" ? "text-blue-600 dark:text-blue-400" :
          "text-green-600 dark:text-green-400"
        }`}>
          {label}
        </span>
      </div>
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-colors ${
              getPasswordStrength(password).level === "weak" && index === 0
                ? color
                : getPasswordStrength(password).level === "fair" && index < 2
                  ? color
                  : getPasswordStrength(password).level === "good" && index < 3
                    ? color
                    : getPasswordStrength(password).level === "strong"
                      ? color
                      : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
