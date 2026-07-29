export type CellType =
    | "empty"
    | "wall"
    | "start"
    | "goal"
    | "visited"
    | "path";

export interface Cell{
    row:number;
    col:number;
    type:CellType;
}

export interface Node{

    row:number;
    col:number;

    g:number;
    h:number;
    f:number;

    parent:Node | null;

}