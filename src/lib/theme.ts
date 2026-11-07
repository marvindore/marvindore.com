export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

const systemTheme = (): Theme =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

/** The theme currently on screen: the saved choice if there is one, otherwise the system setting. */
export const currentTheme = (): Theme =>
    (document.documentElement.dataset.theme as Theme | undefined) ?? systemTheme();

export function applyTheme(theme: Theme): void {
    document.documentElement.dataset.theme = theme;
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Storage can be blocked (private mode). The choice then lasts for this page only.
    }
}

export const toggleTheme = (): void => applyTheme(currentTheme() === "dark" ? "light" : "dark");
