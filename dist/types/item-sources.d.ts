import { IGameLocation } from './game-location';
export interface ItemSourceCharacter {
    name: string;
    id: number;
}
export interface ItemSourceLocation {
    act: IGameLocation;
    superRegion?: IGameLocation;
    region?: IGameLocation;
    location?: IGameLocation;
}
export interface ItemSource {
    location: ItemSourceLocation;
    character?: ItemSourceCharacter;
}
