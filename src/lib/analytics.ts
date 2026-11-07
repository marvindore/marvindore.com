/**
 * Provider-agnostic click tracking. Elements opt in with `data-track="name"`.
 * Swap the provider (Plausible, Umami, GA...) without touching any component.
 */
export interface AnalyticsProvider {
    track(event: string): void;
}

/** Forwards to Plausible when its script is present; otherwise does nothing. */
export const plausibleProvider: AnalyticsProvider = {
    track(event) {
        (window as unknown as { plausible?: (e: string) => void }).plausible?.(event);
    },
};

export function trackClicks(provider: AnalyticsProvider): void {
    document.addEventListener("click", (e) => {
        const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
        if (el?.dataset.track) provider.track(el.dataset.track);
    });
}
