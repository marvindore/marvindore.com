/** Replaces a click-to-load placeholder's contents with the real iframe. */
export function activateEmbed(container: HTMLElement): void {
    const iframe = document.createElement("iframe");
    iframe.src = container.dataset.embedSrc ?? "";
    iframe.title = container.dataset.title ?? "YouTube video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    container.replaceChildren(iframe);
}
