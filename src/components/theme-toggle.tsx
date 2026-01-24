import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      variant="glass"
      size="icon"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        // Some environments need stronger bubbling guards
        // @ts-ignore
        if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
          // @ts-ignore
          e.nativeEvent.stopImmediatePropagation();
        }
        toggleTheme();
      }}
      className="group hover:scale-110 transition-transform duration-300 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 min-w-10"
    >
      <Sun className="h-3 w-3 sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 group-hover:text-primary" />
      <Moon className="absolute h-3 w-3 sm:h-[1.2rem] sm:w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 group-hover:text-primary" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
