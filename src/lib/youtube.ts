export const youtubeThumbnail = (videoId: string): string =>
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

export const youtubeEmbedUrl = (videoId: string): string =>
    `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
