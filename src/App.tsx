import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { cn } from "./lib/utils";
import Section from "./components/section";
import ThemeCard from "./components/theme-card";
import { themes } from "./data/themes";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import Project from "./components/project";
import { projects } from "./data/project";

function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-4 md:px-10 lg:px-36 xl:px-76 py-3", className)}>
      {children}
    </div>
  );
}

function Themes() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {themes.map((theme) => (
        <ThemeCard key={theme} currentTheme={theme} />
      ))}
    </div>
  );
}

function App() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout className="border-b border-border">
        <nav className="flex items-center justify-between">
          <div></div>
          <ModeToggle />
        </nav>
      </Layout>
      <Layout>
        <Section header="Shadcn Themes">
          <Themes />
        </Section>

        <Section header="Showcase">
          <div className="flex gap-4">
            <Calendar
              mode="range"
              selected={date}
              onSelect={setDate}
              className="border"
            />
          </div>
        </Section>

        <Section header="Check Out My Other Projects">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </Section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
