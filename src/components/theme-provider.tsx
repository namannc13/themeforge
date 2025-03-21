import { createContext, useContext, useEffect, useState } from "react";

export const themes = [
  "light",
  "dark",
  "light_blue",
  "dark_blue",
  "light_green",
  "dark_green",
  "light_red",
  "dark_red",
] as const;

type Theme = (typeof themes)[number];

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  cycleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    themes.forEach((t) => root.classList.remove(t));

    root.classList.add(theme);
  }, [theme]);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;

    switch (theme) {
      case "light":
        root.style.setProperty("--background", "oklch(1 0 0)");
        root.style.setProperty("--foreground", "oklch(0.145 0 0)");
        root.style.setProperty("--card", "oklch(1 0 0)");
        root.style.setProperty("--card-foreground", "oklch(0.145 0 0)");
        root.style.setProperty("--popover", "oklch(1 0 0)");
        root.style.setProperty("--popover-foreground", "oklch(0.145 0 0)");
        root.style.setProperty("--primary", "oklch(0.205 0 0)");
        root.style.setProperty("--primary-foreground", "oklch(0.985 0 0)");
        root.style.setProperty("--secondary", "oklch(0.97 0 0)");
        root.style.setProperty("--secondary-foreground", "oklch(0.205 0 0)");
        root.style.setProperty("--muted", "oklch(0.97 0 0)");
        root.style.setProperty("--muted-foreground", "oklch(0.556 0 0)");
        root.style.setProperty("--accent", "oklch(0.97 0 0)");
        root.style.setProperty("--accent-foreground", "oklch(0.205 0 0)");
        root.style.setProperty("--destructive", "oklch(0.577 0.245 27.325)");
        root.style.setProperty("--border", "oklch(0.922 0 0)");
        root.style.setProperty("--input", "oklch(0.922 0 0)");
        root.style.setProperty("--ring", "oklch(0.708 0 0)");
        root.style.setProperty("--chart-1", "oklch(0.646 0.222 41.116)");
        root.style.setProperty("--chart-2", "oklch(0.6 0.118 184.704)");
        root.style.setProperty("--chart-3", "oklch(0.398 0.07 227.392)");
        root.style.setProperty("--chart-4", "oklch(0.828 0.189 84.429)");
        root.style.setProperty("--chart-5", "oklch(0.769 0.188 70.08)");
        break;

      case "dark":
        root.style.setProperty("--background", "oklch(0.145 0 0)");
        root.style.setProperty("--foreground", "oklch(0.985 0 0)");
        root.style.setProperty("--card", "oklch(0.205 0 0)");
        root.style.setProperty("--card-foreground", "oklch(0.985 0 0)");
        root.style.setProperty("--popover", "oklch(0.205 0 0)");
        root.style.setProperty("--popover-foreground", "oklch(0.985 0 0)");
        root.style.setProperty("--primary", "oklch(0.922 0 0)");
        root.style.setProperty("--primary-foreground", "oklch(0.205 0 0)");
        root.style.setProperty("--secondary", "oklch(0.269 0 0)");
        root.style.setProperty("--secondary-foreground", "oklch(0.985 0 0)");
        root.style.setProperty("--muted", "oklch(0.269 0 0)");
        root.style.setProperty("--muted-foreground", "oklch(0.708 0 0)");
        root.style.setProperty("--accent", "oklch(0.269 0 0)");
        root.style.setProperty("--accent-foreground", "oklch(0.985 0 0)");
        root.style.setProperty("--destructive", "oklch(0.704 0.191 22.216)");
        root.style.setProperty("--border", "oklch(1 0 0 / 10%)");
        root.style.setProperty("--input", "oklch(1 0 0 / 15%)");
        root.style.setProperty("--ring", "oklch(0.556 0 0)");
        root.style.setProperty("--chart-1", "oklch(0.488 0.243 264.376)");
        root.style.setProperty("--chart-2", "oklch(0.696 0.17 162.48)");
        root.style.setProperty("--chart-3", "oklch(0.769 0.188 70.08)");
        root.style.setProperty("--chart-4", "oklch(0.627 0.265 303.9)");
        root.style.setProperty("--chart-5", "oklch(0.645 0.246 16.439)");
        break;

      case "light_blue":
        root.style.setProperty("--background", "oklch(1 0 0)");
        root.style.setProperty("--foreground", "oklch(0.145 0 0)");
        root.style.setProperty("--card", "oklch(1 0 0)");
        root.style.setProperty("--card-foreground", "oklch(0.145 0 0)");
        root.style.setProperty("--popover", "oklch(1 0 0)");
        root.style.setProperty("--popover-foreground", "oklch(0.145 0 0)");
        root.style.setProperty("--primary", "oklch(0.55 0.2 240)");
        root.style.setProperty("--primary-foreground", "oklch(0.98 0.005 240)");
        root.style.setProperty("--secondary", "oklch(0.96 0.01 240)");
        root.style.setProperty(
          "--secondary-foreground",
          "oklch(0.25 0.05 240)"
        );
        root.style.setProperty("--muted", "oklch(0.96 0.01 240)");
        root.style.setProperty("--muted-foreground", "oklch(0.5 0.05 240)");
        root.style.setProperty("--accent", "oklch(0.96 0.01 240)");
        root.style.setProperty("--accent-foreground", "oklch(0.25 0.05 240)");
        root.style.setProperty("--destructive", "oklch(0.6 0.25 25)");
        root.style.setProperty(
          "--destructive-foreground",
          "oklch(0.98 0.005 240)"
        );
        root.style.setProperty("--border", "oklch(0.9 0.01 240)");
        root.style.setProperty("--input", "oklch(0.9 0.01 240)");
        root.style.setProperty("--ring", "oklch(0.55 0.2 240)");
        root.style.setProperty("--radius", "0.3rem");
        root.style.setProperty("--chart-1", "oklch(0.65 0.25 30)");
        root.style.setProperty("--chart-2", "oklch(0.6 0.15 185)");
        root.style.setProperty("--chart-3", "oklch(0.4 0.1 230)");
        root.style.setProperty("--chart-4", "oklch(0.75 0.2 85)");
        root.style.setProperty("--chart-5", "oklch(0.7 0.25 70)");
        break;

      case "dark_blue":
        root.style.setProperty("--background", "oklch(0.145 0 240)");
        root.style.setProperty("--foreground", "oklch(0.98 0.005 240)");
        root.style.setProperty("--card", "oklch(0.145 0 240)");
        root.style.setProperty("--card-foreground", "oklch(0.98 0.005 240)");
        root.style.setProperty("--popover", "oklch(0.145 0 240)");
        root.style.setProperty("--popover-foreground", "oklch(0.98 0.005 240)");
        root.style.setProperty("--primary", "oklch(0.6 0.2 240)");
        root.style.setProperty("--primary-foreground", "oklch(0.25 0.05 240)");
        root.style.setProperty("--secondary", "oklch(0.2 0.05 240)");
        root.style.setProperty(
          "--secondary-foreground",
          "oklch(0.98 0.005 240)"
        );
        root.style.setProperty("--muted", "oklch(0.2 0.05 240)");
        root.style.setProperty("--muted-foreground", "oklch(0.65 0.05 240)");
        root.style.setProperty("--accent", "oklch(0.2 0.05 240)");
        root.style.setProperty("--accent-foreground", "oklch(0.98 0.005 240)");
        root.style.setProperty("--destructive", "oklch(0.3 0.15 25)");
        root.style.setProperty(
          "--destructive-foreground",
          "oklch(0.98 0.005 240)"
        );
        root.style.setProperty("--border", "oklch(0.2 0.05 240)");
        root.style.setProperty("--input", "oklch(0.2 0.05 240)");
        root.style.setProperty("--ring", "oklch(0.5 0.2 240)");
        root.style.setProperty("--chart-1", "oklch(0.55 0.2 240)");
        root.style.setProperty("--chart-2", "oklch(0.5 0.15 180)");
        root.style.setProperty("--chart-3", "oklch(0.6 0.25 30)");
        root.style.setProperty("--chart-4", "oklch(0.55 0.2 300)");
        root.style.setProperty("--chart-5", "oklch(0.55 0.25 0)");
        break;

      case "light_green":
        root.style.setProperty("--background", "oklch(1 0 0)");
        root.style.setProperty("--foreground", "oklch(0.15 0.01 240)");
        root.style.setProperty("--card", "oklch(1 0 0)");
        root.style.setProperty("--card-foreground", "oklch(0.15 0.01 240)");
        root.style.setProperty("--popover", "oklch(1 0 0)");
        root.style.setProperty("--popover-foreground", "oklch(0.15 0.01 240)");
        root.style.setProperty("--primary", "oklch(0.55 0.15 145)");
        root.style.setProperty("--primary-foreground", "oklch(0.98 0.005 0)");
        root.style.setProperty("--secondary", "oklch(0.96 0.01 240)");
        root.style.setProperty("--secondary-foreground", "oklch(0.2 0.01 240)");
        root.style.setProperty("--muted", "oklch(0.96 0.01 240)");
        root.style.setProperty("--muted-foreground", "oklch(0.5 0.01 240)");
        root.style.setProperty("--accent", "oklch(0.96 0.01 240)");
        root.style.setProperty("--accent-foreground", "oklch(0.2 0.01 240)");
        root.style.setProperty("--destructive", "oklch(0.6 0.25 25)");
        root.style.setProperty("--destructive-foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--border", "oklch(0.9 0.01 240)");
        root.style.setProperty("--input", "oklch(0.9 0.01 240)");
        root.style.setProperty("--ring", "oklch(0.55 0.15 145)");
        root.style.setProperty("--radius", "0.3rem");
        root.style.setProperty("--chart-1", "oklch(0.65 0.25 30)");
        root.style.setProperty("--chart-2", "oklch(0.6 0.15 185)");
        root.style.setProperty("--chart-3", "oklch(0.4 0.1 230)");
        root.style.setProperty("--chart-4", "oklch(0.75 0.2 85)");
        root.style.setProperty("--chart-5", "oklch(0.7 0.25 70)");
        break;

      case "dark_green":
        root.style.setProperty("--background", "oklch(0.15 0.02 30)");
        root.style.setProperty("--foreground", "oklch(0.95 0 0)");
        root.style.setProperty("--card", "oklch(0.2 0.015 30)");
        root.style.setProperty("--card-foreground", "oklch(0.95 0 0)");
        root.style.setProperty("--popover", "oklch(0.15 0 0)");
        root.style.setProperty("--popover-foreground", "oklch(0.95 0 0)");
        root.style.setProperty("--primary", "oklch(0.6 0.15 145)");
        root.style.setProperty("--primary-foreground", "oklch(0.2 0.15 145)");
        root.style.setProperty("--secondary", "oklch(0.2 0.01 240)");
        root.style.setProperty("--secondary-foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--muted", "oklch(0.2 0 0)");
        root.style.setProperty("--muted-foreground", "oklch(0.65 0.01 240)");
        root.style.setProperty("--accent", "oklch(0.2 0.02 30)");
        root.style.setProperty("--accent-foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--destructive", "oklch(0.3 0.15 25)");
        root.style.setProperty(
          "--destructive-foreground",
          "oklch(0.98 0.02 0)"
        );
        root.style.setProperty("--border", "oklch(0.2 0.01 240)");
        root.style.setProperty("--input", "oklch(0.2 0.01 240)");
        root.style.setProperty("--ring", "oklch(0.45 0.15 145)");
        root.style.setProperty("--chart-1", "oklch(0.55 0.2 240)");
        root.style.setProperty("--chart-2", "oklch(0.5 0.15 180)");
        root.style.setProperty("--chart-3", "oklch(0.6 0.25 30)");
        root.style.setProperty("--chart-4", "oklch(0.55 0.2 300)");
        root.style.setProperty("--chart-5", "oklch(0.55 0.25 0)");
        break;

      case "light_red":
        root.style.setProperty("--background", "oklch(1 0 0)");
        root.style.setProperty("--foreground", "oklch(0.15 0 0)");
        root.style.setProperty("--card", "oklch(1 0 0)");
        root.style.setProperty("--card-foreground", "oklch(0.15 0 0)");
        root.style.setProperty("--popover", "oklch(1 0 0)");
        root.style.setProperty("--popover-foreground", "oklch(0.15 0 0)");
        root.style.setProperty("--primary", "oklch(0.55 0.2 25)");
        root.style.setProperty("--primary-foreground", "oklch(0.98 0.02 0)");
        root.style.setProperty("--secondary", "oklch(0.96 0 0)");
        root.style.setProperty("--secondary-foreground", "oklch(0.15 0 0)");
        root.style.setProperty("--muted", "oklch(0.96 0 0)");
        root.style.setProperty("--muted-foreground", "oklch(0.5 0 0)");
        root.style.setProperty("--accent", "oklch(0.96 0 0)");
        root.style.setProperty("--accent-foreground", "oklch(0.15 0 0)");
        root.style.setProperty("--destructive", "oklch(0.6 0.25 25)");
        root.style.setProperty("--destructive-foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--border", "oklch(0.9 0 0)");
        root.style.setProperty("--input", "oklch(0.9 0 0)");
        root.style.setProperty("--ring", "oklch(0.55 0.2 25)");
        root.style.setProperty("--radius", "0.3rem");
        root.style.setProperty("--chart-1", "oklch(0.65 0.25 30)");
        root.style.setProperty("--chart-2", "oklch(0.5 0.15 185)");
        root.style.setProperty("--chart-3", "oklch(0.4 0.1 230)");
        root.style.setProperty("--chart-4", "oklch(0.75 0.2 85)");
        root.style.setProperty("--chart-5", "oklch(0.7 0.25 70)");
        break;

      case "dark_red":
        root.style.setProperty("--background", "oklch(0.15 0 0)");
        root.style.setProperty("--foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--card", "oklch(0.15 0 0)");
        root.style.setProperty("--card-foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--popover", "oklch(0.15 0 0)");
        root.style.setProperty("--popover-foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--primary", "oklch(0.55 0.2 25)");
        root.style.setProperty("--primary-foreground", "oklch(0.98 0.02 0)");
        root.style.setProperty("--secondary", "oklch(0.2 0 0)");
        root.style.setProperty("--secondary-foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--muted", "oklch(0.2 0 0)");
        root.style.setProperty("--muted-foreground", "oklch(0.65 0 0)");
        root.style.setProperty("--accent", "oklch(0.2 0 0)");
        root.style.setProperty("--accent-foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--destructive", "oklch(0.3 0.15 25)");
        root.style.setProperty("--destructive-foreground", "oklch(0.98 0 0)");
        root.style.setProperty("--border", "oklch(0.2 0 0)");
        root.style.setProperty("--input", "oklch(0.2 0 0)");
        root.style.setProperty("--ring", "oklch(0.55 0.2 25)");
        root.style.setProperty("--chart-1", "oklch(0.55 0.2 240)");
        root.style.setProperty("--chart-2", "oklch(0.5 0.15 180)");
        root.style.setProperty("--chart-3", "oklch(0.6 0.25 30)");
        root.style.setProperty("--chart-4", "oklch(0.55 0.2 300)");
        root.style.setProperty("--chart-5", "oklch(0.55 0.25 0)");
        break;
    }
  };

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    cycleTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
