const TRIGGER_FRACTION = 0.3;

/**
 * Marks the nav link for the section being read with aria-current="true".
 * A section is current once its top passes 30% of the viewport; at the very bottom of the
 * page the last section wins, since short final sections can never scroll that far up.
 */
export function watchSections(links: Iterable<HTMLAnchorElement>): void {
    const entries = [...links]
        .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
        .filter((e): e is { link: HTMLAnchorElement; section: HTMLElement } => e.section !== null);
    if (entries.length === 0) return;

    const update = () => {
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        const line = window.innerHeight * TRIGGER_FRACTION;
        let current = entries[0];
        for (const entry of entries) {
            if (entry.section.getBoundingClientRect().top <= line) current = entry;
        }
        if (atBottom) current = entries[entries.length - 1];
        for (const { link } of entries) link.setAttribute("aria-current", String(link === current.link));
    };

    let queued = false;
    window.addEventListener(
        "scroll",
        () => {
            if (queued) return;
            queued = true;
            requestAnimationFrame(() => {
                queued = false;
                update();
            });
        },
        { passive: true },
    );
    update();
}
