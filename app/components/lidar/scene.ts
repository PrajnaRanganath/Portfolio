import {
    Point,
    Cluster,
    PointType,
} from "./types";


/* =====================================================
   RANDOM
===================================================== */

function random(
    min: number,
    max: number
): number {

    return (
        Math.random() *
        (max - min)
    ) + min;

}


/* =====================================================
   POINT
===================================================== */

function makePoint(
    x: number,
    y: number,
    z: number,
    type: PointType
): Point {

    return {

        x,
        y,
        z,
        type,

        // Important:
        // All raw points begin unclustered.
        clusterId: -1,

    };

}


/* =====================================================
   BUILD SCENE

   Compact LiDAR environment.

   Camera-facing direction:
       y increases into the scene

   Ground:
       z = 0

   Objects:
       all kept between approximately
       y = 10 and y = 23

   This prevents near objects from
   becoming excessively large.
===================================================== */

export function buildScene(): Point[] {

    const points: Point[] = [];


    /* =================================================
       GROUND

       Wide enough for perspective,
       but sparse enough to keep the
       objects visually dominant.
    ================================================= */

    for (let i = 0; i < 2050; i++) {
    points.push(
        makePoint(
            random(-5.5, 5.5),
            random(6.0, 35.0),
            random(-0.015, 0.015),
            "ground"
        )
    );
}


    /* =================================================
       OBJECT 1
       PARKING BUILDING

       Far left / center

       Compact multi-level structure.
    ================================================= */

    const buildingX = -1.3;

    const buildingY = 21;

    const buildingWidth = 2.8;

    const buildingDepth = 3.0;

    const buildingHeight = 4.0;


    /* ---------- Main building volume ---------- */

    for (
        let i = 0;
        i < 420;
        i++
    ) {

        points.push(

            makePoint(

                random(
                    buildingX -
                    buildingWidth / 2,

                    buildingX +
                    buildingWidth / 2
                ),

                random(
                    buildingY -
                    buildingDepth / 2,

                    buildingY +
                    buildingDepth / 2
                ),

                random(
                    0.2,
                    buildingHeight
                ),

                "building"

            )

        );

    }


    /* ---------- Horizontal floor lines ---------- */

    for (
        let floor = 1;
        floor <= 3;
        floor++
    ) {

        const z =
            floor *
            1.25;


        for (
            let i = 0;
            i < 70;
            i++
        ) {

            points.push(

                makePoint(

                    random(
                        buildingX -
                        buildingWidth / 2,

                        buildingX +
                        buildingWidth / 2
                    ),

                    buildingY -
                    buildingDepth / 2 -
                    0.015,

                    z,

                    "building"

                )

            );

        }

    }


    /* ---------- Windows ---------- */

    for (
        let floor = 0;
        floor < 3;
        floor++
    ) {

        const z =
            0.65 +
            floor *
            1.25;


        for (
            let window = 0;
            window < 5;
            window++
        ) {

            const x =
                buildingX -
                1.0 +
                window *
                0.5;


            for (
                let i = 0;
                i < 10;
                i++
            ) {

                points.push(

                    makePoint(

                        x +
                        random(
                            -0.06,
                            0.06
                        ),

                        buildingY -
                        buildingDepth / 2 -
                        0.03,

                        z +
                        random(
                            -0.18,
                            0.18
                        ),

                        "building"

                    )

                );

            }

        }

    }


    /* =================================================
       OBJECT 2
       TREE

       Center / middle distance
    ================================================= */

    const treeX = 3.5;

    const treeY = 18.5;


    /* ---------- Trunk ---------- */

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const angle =
            random(
                0,
                Math.PI * 2
            );

        const radius =
            random(
                0,
                0.14
            );


        points.push(

            makePoint(

                treeX +
                Math.cos(angle) *
                radius,

                treeY +
                Math.sin(angle) *
                radius,

                random(
                    0.1,
                    2.1
                ),

                "tree"

            )

        );

    }


    /* ---------- Canopy ---------- */

    const canopy = [

        {
            x: treeX,
            y: treeY,
            z: 3.4,
            radius: 0.9,
        },

        {
            x: treeX - 0.55,
            y: treeY,
            z: 3.2,
            radius: 0.75,
        },

        {
            x: treeX + 0.55,
            y: treeY,
            z: 3.2,
            radius: 0.75,
        },

        {
            x: treeX,
            y: treeY + 0.45,
            z: 3.5,
            radius: 0.75,
        },

    ];


    for (
        const part of canopy
    ) {

        for (
            let i = 0;
            i < 90;
            i++
        ) {

            const theta =
                random(
                    0,
                    Math.PI * 2
                );

            const phi =
                Math.acos(
                    random(
                        -1,
                        1
                    )
                );

            const radius =
                random(
                    0,
                    part.radius
                );


            points.push(

                makePoint(

                    part.x +
                    radius *
                    Math.sin(phi) *
                    Math.cos(theta),

                    part.y +
                    radius *
                    Math.sin(phi) *
                    Math.sin(theta),

                    part.z +
                    radius *
                    Math.cos(phi),

                    "tree"

                )

            );

        }

    }


    /* =================================================
       OBJECT 3
       CAR

       Center foreground,
       but still safely distant.
    ================================================= */

    const carX = -0.2;

    const carY = 16.5;


    /* ---------- Main body ---------- */

    for (
        let i = 0;
        i < 180;
        i++
    ) {

        points.push(

            makePoint(

                random(
                    carX - 1.0,
                    carX + 1.0
                ),

                random(
                    carY - 0.45,
                    carY + 0.45
                ),

                random(
                    0.2,
                    0.75
                ),

                "car"

            )

        );

    }


    /* ---------- Cabin ---------- */

    for (
        let i = 0;
        i < 110;
        i++
    ) {

        const t =
            random(
                0,
                1
            );


        const halfWidth =
            0.7 -
            0.15 *
            t;


        points.push(

            makePoint(

                random(
                    carX -
                    halfWidth,

                    carX +
                    halfWidth
                ),

                random(
                    carY - 0.35,
                    carY + 0.35
                ),

                random(
                    0.75,
                    1.35
                ),

                "car"

            )

        );

    }


    /* ---------- Roof ---------- */

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        points.push(

            makePoint(

                random(
                    carX - 0.55,
                    carX + 0.55
                ),

                random(
                    carY - 0.3,
                    carY + 0.3
                ),

                random(
                    1.3,
                    1.5
                ),

                "car"

            )

        );

    }


    /* =================================================
       VERY LIGHT SENSOR NOISE

       Kept sparse so the scene remains clear.
    ================================================= */

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        points.push(

            makePoint(

                random(
                    -4.5,
                    4.5
                ),

                random(
                    8,
                    24
                ),

                random(
                    0.2,
                    3.5
                ),

                "noise"

            )

        );

    }


    return points;

}


/* =====================================================
   REMOVE NOISE
===================================================== */

export function removeNoise(
    points: Point[]
): Point[] {

    return points.filter(

        p =>
            p.type !==
            "noise"

    );

}


/* =====================================================
   REMOVE GROUND
===================================================== */

export function removeGround(
    points: Point[]
): Point[] {

    return points.filter(

        p =>
            p.type !==
            "ground"

    );

}


/* =====================================================
   VOXEL DOWNSAMPLE

   Simple spatial voxel filter.

   This is deterministic and fast.
===================================================== */

export function voxelDownsample(
    points: Point[]
): Point[] {

    const voxelSize =
        0.12;

    const map =
        new Map<
            string,
            Point
        >();


    for (
        const p of points
    ) {

        const vx =
            Math.floor(
                p.x /
                voxelSize
            );

        const vy =
            Math.floor(
                p.y /
                voxelSize
            );

        const vz =
            Math.floor(
                p.z /
                voxelSize
            );


        const key =
            `${vx}_${vy}_${vz}`;


        if (
            !map.has(key)
        ) {

            map.set(
                key,
                {
                    ...p,
                    clusterId: -1,
                }
            );

        }

    }


    return Array.from(
        map.values()
    );

}


/* =====================================================
   CLUSTERING

   Uses object type as the reliable semantic separation.

   This is intentional for this visualization:
   the goal is to demonstrate the perception pipeline
   clearly rather than simulate a full DBSCAN implementation.

   Maximum:
       3 object clusters
===================================================== */

export function clusterPoints(
    points: Point[]
): Cluster[] {

    const types:
        PointType[] = [

        "building",
        "tree",
        "car",

    ];


    const clusters:
        Cluster[] = [];


    types.forEach(

        (
            type,
            id
        ) => {

            const clusterPoints =
                points.filter(

                    p =>
                        p.type ===
                        type

                );


            if (
                clusterPoints.length <
                8
            ) {

                return;

            }


            /*
             * Make sure every point
             * receives its cluster ID.
             */

            const assigned =
                clusterPoints.map(

                    p => ({

                        ...p,

                        clusterId:
                            id,

                    })

                );


            const xs =
                assigned.map(
                    p => p.x
                );

            const ys =
                assigned.map(
                    p => p.y
                );

            const zs =
                assigned.map(
                    p => p.z
                );


            clusters.push({

                id,

                points:
                    assigned,

                minX:
                    Math.min(
                        ...xs
                    ),

                maxX:
                    Math.max(
                        ...xs
                    ),

                minY:
                    Math.min(
                        ...ys
                    ),

                maxY:
                    Math.max(
                        ...ys
                    ),

                minZ:
                    Math.min(
                        ...zs
                    ),

                maxZ:
                    Math.max(
                        ...zs
                    ),

            });

        }

    );


    return clusters;

}