import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

const themeIcons = {
  light: <Moon className="h-[1.2rem] w-[1.2rem]" />,
  dark: <Sun className="h-[1.2rem] w-[1.2rem]" />,
  light_blue: <Moon className="h-[1.2rem] w-[1.2rem]" />,
  dark_blue: <Sun className="h-[1.2rem] w-[1.2rem]" />,
  light_green: <Moon className="h-[1.2rem] w-[1.2rem]" />,
  dark_green: <Sun className="h-[1.2rem] w-[1.2rem]" />,
  light_red: <Moon className="h-[1.2rem] w-[1.2rem]" />,
  dark_red: <Sun className="h-[1.2rem] w-[1.2rem]" />,
};

export function ModeToggle() {
  const { theme, cycleTheme } = useTheme();

  return (
    <Button
      size="icon"
      className="hover:cursor-pointer rounded-full flex items-center justify-center"
      variant="outline"
      onClick={cycleTheme}
    >
      {themeIcons[theme]}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
