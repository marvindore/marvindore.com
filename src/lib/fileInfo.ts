import { statSync } from "node:fs";
import { join } from "node:path";

/** "PDF · 210 KB" for a file in /public, so people on mobile data know what they are downloading. Build-time only. */
export function fileLabel(publicPath: string, kind: string): string {
    try {
        const bytes = statSync(join(process.cwd(), "public", publicPath)).size;
        const size = bytes >= 1_000_000 ? `${(bytes / 1_000_000).toFixed(1)} MB` : `${Math.round(bytes / 1000)} KB`;
        return `${kind} · ${size}`;
    } catch {
        return kind;
    }
}
