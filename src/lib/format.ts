const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
});

export const formatDate = (date: Date): string => dateFormatter.format(date);

const WORDS_PER_MINUTE = 230;

export const readingTime = (text: string): string =>
    `${Math.max(1, Math.round(text.trim().split(/\s+/).length / WORDS_PER_MINUTE))} min read`;
