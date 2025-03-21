import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useTheme } from "./theme-provider";

const themeColors = {
  light: "bg-white",
  dark: "bg-black",
  light_blue: "bg-white",
  dark_blue: "bg-black",
  light_green: "bg-white",
  dark_green: "bg-black",
  light_red: "bg-white",
  dark_red: "bg-black",
} as const;

const themeAccentColors = {
  light: "bg-[#000000]",
  dark: "bg-[#FFFFFF]",
  light_blue: "bg-[#52A2E7]",
  dark_blue: "bg-[#67B1EB]",
  light_green: "bg-[#51B972]",
  dark_green: "bg-[#5EC57C]",
  light_red: "bg-[#FF6B6B]",
  dark_red: "bg-[#FF8787]",
} as const;

export default function ThemeCard({ currentTheme }: { currentTheme: string }) {
  const { theme } = useTheme();
  const isActive = theme === currentTheme;

  if (isActive) {
    return (
      <div className="w-full flex items-center gap-2">
        {currentTheme} <Star className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className="w-full flex items-center gap-2">
      <div
        className={cn(
          "h-4 w-10 flex border",
          (theme === "dark" ||
            theme === "dark_blue" ||
            theme === "dark_green" ||
            theme === "dark_red") &&
            " border-white",
          (theme === "light" ||
            theme === "light_blue" ||
            theme === "light_green" ||
            theme === "light_red") &&
            " border-black"
        )}
      >
        <div
          className={cn(
            themeColors[currentTheme as keyof typeof themeColors],
            "flex-1"
          )}
        />
        <div
          className={cn(
            themeAccentColors[currentTheme as keyof typeof themeAccentColors],
            "flex-1"
          )}
        />
      </div>
      {currentTheme}
    </div>
  );
}
