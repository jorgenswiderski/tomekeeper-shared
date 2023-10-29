export type BuildId = string;

export interface Build {
    encoded: string;
    version: string;
    id: BuildId;
    mayEdit?: boolean;
}

export interface BuildWithInfo extends Omit<Build, 'mayEdit'> {
    createdUtc: number;
    hits: number;
    lastAccessedUtc: number;
    lastModifiedUtc: number;
    ip: string;
}
