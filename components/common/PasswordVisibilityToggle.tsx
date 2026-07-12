import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

type PasswordVisibilityToggleProps = {
  isVisible: boolean;
  onToggle: () => void;
};

export function PasswordVisibilityToggle({
  isVisible,
  onToggle,
}: PasswordVisibilityToggleProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={onToggle}
      className="absolute right-2 top-1/2 -translate-y-1/2"
      aria-label={isVisible ? "Hide password" : "Show password"}
    >
      {isVisible ? (
        <EyeOff className="size-4 text-muted-foreground" />
      ) : (
        <Eye className="size-4 text-muted-foreground" />
      )}
    </Button>
  );
}
