/** "hq" is 480px wide (cards); "sd" is 640px wide (the large player and share images). */
export const youtubeThumbnail = (videoId: string, quality: "hq" | "sd" = "hq"): string =>
    `https://i.ytimg.com/vi/${videoId}/${quality}default.jpg`;

export const youtubeEmbedUrl = (videoId: string): string =>
    `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

/** Opens YouTube's subscribe confirmation prompt for a channel. */
export const subscribeUrl = (channelHref: string): string => `${channelHref}?sub_confirmation=1`;
