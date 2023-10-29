export type BuildId = string;

export interface Build {
    encoded: string;
    version: string;
    id: BuildId;
}

export interface BuildWithInfo extends Build {
    createdUtc: number;
    hits: number;
}
