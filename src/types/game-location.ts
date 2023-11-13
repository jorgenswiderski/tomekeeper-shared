export interface IGameLocation {
    name: string;
    id?: number;
}

export interface IGameLocationNode extends IGameLocation {
    depth: number;
}
