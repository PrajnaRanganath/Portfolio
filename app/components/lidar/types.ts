export type PointType =
    | "ground"
    | "building"
    | "tree"
    | "car"
    | "truck"
    | "noise";

export interface Point {

    x: number;
    y: number;
    z: number;

    type: PointType;

    clusterId: number;

}

export interface Cluster {

    id: number;

    points: Point[];

    minX: number;
    maxX: number;

    minY: number;
    maxY: number;

    minZ: number;
    maxZ: number;

}