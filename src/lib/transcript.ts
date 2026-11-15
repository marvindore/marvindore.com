/** One subtitle line: start/end in seconds. */
export interface Cue {
    start: number;
    end: number;
    text: string;
}

/** A paragraph of the transcript: consecutive cues by one speaker. */
export interface Turn {
    speaker?: string;
    start: number;
    cues: Cue[];
}

const TIME = /(\d+):(\d{2}):(\d{2})[,.](\d{3})/;
const SPEAKER = /^([A-Z][\w.'-]*(?: [\w.'-]+){0,3}): /;

const toSeconds = (stamp: string): number => {
    const m = TIME.exec(stamp);
    return m ? +m[1] * 3600 + +m[2] * 60 + +m[3] + +m[4] / 1000 : 0;
};

/** Parses SRT text into cues, splitting off the optional "Speaker: " prefix. */
export function parseSrt(raw: string): (Cue & { speaker?: string })[] {
    return raw
        .replace(/\r/g, "")
        .split(/\n{2,}/)
        .flatMap((block) => {
            const lines = block.trim().split("\n");
            const timing = lines.findIndex((l) => l.includes("-->"));
            if (timing < 0) return [];
            const [from, to] = lines[timing].split("-->");
            let text = lines
                .slice(timing + 1)
                .join(" ")
                .trim();
            const speaker = SPEAKER.exec(text)?.[1];
            if (speaker) text = text.slice(speaker.length + 2);
            return text ? [{ start: toSeconds(from), end: toSeconds(to), text, speaker }] : [];
        });
}

const PARAGRAPH_CHARS = 500;
const PAUSE_SECONDS = 2;

/**
 * Groups cues into readable paragraphs: a new one starts when the speaker changes,
 * after a long pause, or once the paragraph is long and the sentence has ended.
 */
export function toTurns(cues: ReturnType<typeof parseSrt>): Turn[] {
    const turns: Turn[] = [];
    let length = 0;
    let previous: (typeof cues)[number] | undefined;

    for (const { speaker, ...cue } of cues) {
        const current = turns.at(-1);
        const speakerChanged = previous !== undefined && speaker !== previous.speaker;
        const paused = previous !== undefined && cue.start - previous.end >= PAUSE_SECONDS;
        const longEnough = length >= PARAGRAPH_CHARS && /[.?!]["”']?$/.test(previous?.text ?? "");

        if (!current || speakerChanged || paused || longEnough) {
            turns.push({ speaker, start: cue.start, cues: [cue] });
            length = cue.text.length;
        } else {
            current.cues.push(cue);
            length += cue.text.length + 1;
        }
        previous = { ...cue, speaker };
    }
    return turns;
}

/** 83 -> "1:23", 3725 -> "1:02:05". */
export function formatTime(seconds: number): string {
    const s = Math.floor(seconds);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = String(s % 60).padStart(2, "0");
    return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${sec}` : `${m}:${sec}`;
}

const files = import.meta.glob<string>("../data/transcripts/*.srt", {
    query: "?raw",
    import: "default",
    eager: true,
});

/** Loads `src/data/transcripts/<id>.srt` as paragraphs. */
export function loadTranscript(id: string): Turn[] {
    const raw = files[`../data/transcripts/${id}.srt`];
    if (raw === undefined) throw new Error(`Missing transcript: src/data/transcripts/${id}.srt`);
    return toTurns(parseSrt(raw));
}
