import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useTheme } from "./theme-provider";
import { themes } from "@/lib/themes";

const themeColors = {
  light: `bg-${themes[0].color}`,
  dark: `bg-${themes[1].color}`,
  light_blue: `bg-${themes[2].color}`,
  dark_blue: `bg-${themes[3].color}`,
  light_green: `bg-${themes[4].color}`,
  dark_green: `bg-${themes[5].color}`,
  light_red: `bg-${themes[6].color}`,
  dark_red: `bg-${themes[7].color}`,
} as const;

const themeAccentColors = {
  light: `bg-[${themes[0].accentColor}]`,
  dark: `bg-[${themes[1].accentColor}]`,
  light_blue: `bg-[${themes[2].accentColor}]`,
  dark_blue: `bg-[${themes[3].accentColor}]`,
  light_green: `bg-[${themes[4].accentColor}]`,
  dark_green: `bg-[${themes[5].accentColor}]`,
  light_red: `bg-[${themes[6].accentColor}]`,
  dark_red: `bg-[${themes[7].accentColor}]`,
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
          "h-4 w-10 flex",
          (theme === "dark" ||
            theme === "dark_blue" ||
            theme === "dark_green" ||
            theme === "dark_red") &&
            "border border-white",
          (theme === "light" ||
            theme === "light_blue" ||
            theme === "light_green" ||
            theme === "light_red") &&
            "border border-black"
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
