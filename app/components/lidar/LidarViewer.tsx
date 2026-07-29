"use client";

import {
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import styles
    from "./LidarViewer.module.css";

import {
    buildScene,
    removeNoise,
    removeGround,
    voxelDownsample,
    clusterPoints,
} from "./scene";

import {
    Point,
    Cluster,
} from "./types";


const stages = [

    "RAW",

    "NOISE",

    "GROUND",

    "VOXEL",

    "CLUSTER",

    "BOXES",

];


const clusterColors = [

    "#FF5C5C",

    "#4D96FF",

    "#6BCB77",

    "#C77DFF",

    "#FF9F1C",

];


export default function LidarViewer() {

    const [
        stage,
        setStage
    ] =
        useState(0);


    const raw =
        useMemo(

            () =>
                buildScene(),

            []

        );


    const noise =
        useMemo(

            () =>
                removeNoise(
                    raw
                ),

            [raw]

        );


    const ground =
        useMemo(

            () =>
                removeGround(
                    noise
                ),

            [noise]

        );


    const voxel =
        useMemo(

            () =>
                voxelDownsample(
                    ground
                ),

            [ground]

        );


    const clusters =
        useMemo(

            () =>
                clusterPoints(
                    voxel
                ),

            [voxel]

        );


let visible: Point[];

if (stage === 0) {

    visible = raw;

}
else if (stage === 1) {

    visible = noise;

}
else if (stage === 2) {

    visible = ground;

}
else if (stage === 3) {

    visible = voxel;

}
else {

    visible =
        clusters.flatMap(
            cluster =>
                cluster.points
        );

}


    return (

        <div
            className={
                styles.viewer
            }
        >

            <div
                className={
                    styles.header
                }
            >


                <h3>
                    Point Cloud Pipeline
                </h3>


            </div>

<div className={styles.toolbar}>

    {/* ROW 1 */}

    <div className={styles.toolbarRow}>

        <button
            className={
                stage === 0
                    ? styles.active
                    : styles.button
            }
            onClick={() => setStage(0)}
        >
            RAW
        </button>

        <span className={styles.arrow}>→</span>

        <button
            className={
                stage === 1
                    ? styles.active
                    : styles.button
            }
            onClick={() => setStage(1)}
        >
            NOISE
        </button>

        <span className={styles.arrow}>→</span>

        <button
            className={
                stage === 2
                    ? styles.active
                    : styles.button
            }
            onClick={() => setStage(2)}
        >
            GROUND
        </button>

    </div>


    {/* ROW 2 */}

    <div className={styles.toolbarRowSecond}>

        <span className={styles.arrow}>→</span>

        <button
            className={
                stage === 3
                    ? styles.active
                    : styles.button
            }
            onClick={() => setStage(3)}
        >
            VOXEL
        </button>

        <span className={styles.arrow}>→</span>

        <button
            className={
                stage === 4
                    ? styles.active
                    : styles.button
            }
            onClick={() => setStage(4)}
        >
            CLUSTER
        </button>

        <span className={styles.arrow}>→</span>

        <button
            className={
                stage === 5
                    ? styles.active
                    : styles.button
            }
            onClick={() => setStage(5)}
        >
            BOXES
        </button>

    </div>

</div>


            <div
                className={
                    styles.visualArea
                }
            >

                <LidarCanvas

                    points={
                        visible
                    }

                    clusters={
                        clusters
                    }

                    stage={
                        stage
                    }

                />


                <div
                    className={
                        styles.range
                    }
                >

                    <span>
                        RANGE
                    </span>

                    <strong>
                        30 m
                    </strong>

                </div>


                <div
                    className={
                        styles.stats
                    }
                >

                    {visible.length}

                    {" POINTS"}

                    {
                        stage >= 4
                        && (

                            <>
                                {" • "}
                                {
                                    clusters.length
                                }
                                {" OBJECTS"}
                            </>

                        )
                    }

                </div>

            </div>

        </div>

    );

}


/* =====================================================
   CANVAS
===================================================== */

interface CanvasProps {

    points: Point[];

    clusters: Cluster[];

    stage: number;

}


function LidarCanvas({

    points,

    clusters,

    stage,

}: CanvasProps) {

    const canvasRef =
        useRef<HTMLCanvasElement>(
            null
        );


    useEffect(

        () => {

            const canvas =
                canvasRef.current;


            if (
                !canvas
            ) {

                return;

            }


            const ctx =
                canvas.getContext(
                    "2d"
                );


            if (
                !ctx
            ) {

                return;

            }


            const rect =
                canvas.getBoundingClientRect();


            const width =
                rect.width;


            const height =
                rect.height;


            const dpr =
                Math.min(

                    window.devicePixelRatio ||
                    1,

                    2

                );


            canvas.width =
                width *
                dpr;


            canvas.height =
                height *
                dpr;


            ctx.setTransform(

                dpr,

                0,

                0,

                dpr,

                0,

                0

            );
            ctx.translate(0, height);
            ctx.scale(1, -1);


            /* =========================================
               BACKGROUND
            ========================================= */

            ctx.fillStyle =
                "#22223B";


            ctx.fillRect(

                0,

                0,

                width,

                height

            );


            /* =========================================
               CAMERA

               Elevated diagonal view.

               This is the most important part.
            ========================================= */

            const camera = {

                x: 9,

                y: 4,

                z: 9,

            };


            const target = {

                x: -0.5,

                y: 21,

                z: 2,

            };


            const fx =
                target.x -
                camera.x;


            const fy =
                target.y -
                camera.y;


            const fz =
                target.z -
                camera.z;


            const fLength =

                Math.sqrt(

                    fx * fx +

                    fy * fy +

                    fz * fz

                );


            const forwardX =
                fx /
                fLength;


            const forwardY =
                fy /
                fLength;


            const forwardZ =
                fz /
                fLength;


            /* Camera right vector */

            const rightX =
                forwardY;


            const rightY =
                -forwardX;


            /* Camera up vector */

            const upX =
                -forwardZ *
                rightY;


            const upY =
                forwardZ *
                rightX;


            const upZ =

                forwardX *
                rightY -

                forwardY *
                rightX;


            const focal =

                Math.min(
                    width,
                    height
                ) *
                1.45;


            function project(

                p: Point

            ) {

                const dx =
                    p.x -
                    camera.x;


                const dy =
                    p.y -
                    camera.y;


                const dz =
                    p.z -
                    camera.z;


                const depth =

                    dx *
                    forwardX +

                    dy *
                    forwardY +

                    dz *
                    forwardZ;


                if (
                    depth <=
                    0.1
                ) {

                    return null;

                }


                const horizontal =

                    dx *
                    rightX +

                    dy *
                    rightY;


                const vertical =

                    dx *
                    upX +

                    dy *
                    upY +

                    dz *
                    upZ;


                return {

                    x:

                        width /
                        2 +

                        horizontal *
                        focal /
                        depth,

                    y:

                        height *
                        0.55 -

                        vertical *
                        focal /
                        depth,

                    depth,

                };

            }


            /* =========================================
               GROUND GRID
            ========================================= */

            ctx.strokeStyle =
                "rgba(255,215,0,0.09)";


            ctx.lineWidth =
                1;


            for (
                let y = 5;
                y <= 34;
                y += 3
            ) {

                const a =
                    project({

                        x: -10,

                        y,

                        z: 0,

                        type:
                            "ground",

                        clusterId:
                            -1,

                    });


                const b =
                    project({

                        x: 10,

                        y,

                        z: 0,

                        type:
                            "ground",

                        clusterId:
                            -1,

                    });


                if (
                    a &&
                    b
                ) {

                    ctx.beginPath();

                    ctx.moveTo(
                        a.x,
                        a.y
                    );

                    ctx.lineTo(
                        b.x,
                        b.y
                    );

                    ctx.stroke();

                }

            }


            /* =========================================
               POINT CLOUD
            ========================================= */

            for (
                const p of points
            ) {

                const q =
                    project(
                        p
                    );


                if (
                    !q
                ) {

                    continue;

                }


                let color =
                    "rgba(255,253,241,0.82)";


                if (
                    p.type ===
                    "ground"
                ) {

                    color =
                        "rgba(143,151,168,0.38)";

                }


                if (
                    p.type ===
                    "noise"
                ) {

                    color =
                        "rgba(255,215,0,0.55)";

                }


                /* Cluster colors */

                if (
                    stage === 4 &&
                    p.clusterId >= 0
                ) {

                    color =

                        clusterColors[

                            p.clusterId %

                            clusterColors.length

                        ];

                }


                /* BOX stage:
                   remove cluster colors */

                if (
                    stage === 5
                ) {

                    color =
                        "rgba(255,253,241,0.88)";

                }


                /*
                   Slight depth scaling.

                   Nearby points are larger.
                */

                const radius =

                    Math.max(

                        0.8,

                        Math.min(

                            2.3,

                            28 /
                            q.depth

                        )

                    );


                ctx.fillStyle =
                    color;


                ctx.beginPath();


                ctx.arc(

                    q.x,

                    q.y,

                    radius,

                    0,

                    Math.PI *
                    2

                );


                ctx.fill();

            }


            /* =========================================
               BOUNDING BOXES
            ========================================= */

            if (
                stage === 5
            ) {

                for (
                    const cluster of
                    clusters
                ) {

                    drawBox(

                        ctx,

                        cluster,

                        project

                    );

                }

            }

        },

        [
            points,
            clusters,
            stage,
        ]

    );


    return (

        <canvas

            ref={
                canvasRef
            }

            className={
                styles.canvas
            }

        />

    );

}


/* =====================================================
   DRAW 3D BOUNDING BOX
===================================================== */

function drawBox(

    ctx:
        CanvasRenderingContext2D,

    cluster:
        Cluster,

    project:
        (
            p: Point
        ) =>
            {
                x: number;
                y: number;
                depth: number;
            }
            | null

) {

    const {

        minX,
        maxX,

        minY,
        maxY,

        minZ,
        maxZ,

    } =
        cluster;


    const corners: Point[] = [

        {
            x: minX,
            y: minY,
            z: minZ,
            type: "building",
            clusterId: cluster.id,
        },

        {
            x: maxX,
            y: minY,
            z: minZ,
            type: "building",
            clusterId: cluster.id,
        },

        {
            x: maxX,
            y: maxY,
            z: minZ,
            type: "building",
            clusterId: cluster.id,
        },

        {
            x: minX,
            y: maxY,
            z: minZ,
            type: "building",
            clusterId: cluster.id,
        },

        {
            x: minX,
            y: minY,
            z: maxZ,
            type: "building",
            clusterId: cluster.id,
        },

        {
            x: maxX,
            y: minY,
            z: maxZ,
            type: "building",
            clusterId: cluster.id,
        },

        {
            x: maxX,
            y: maxY,
            z: maxZ,
            type: "building",
            clusterId: cluster.id,
        },

        {
            x: minX,
            y: maxY,
            z: maxZ,
            type: "building",
            clusterId: cluster.id,
        },

    ];


    const projected =
        corners.map(
            project
        );


    if (
        projected.some(
            p =>
                p === null
        )
    ) {

        return;

    }


    const p =
        projected as NonNullable<
            ReturnType<
                typeof project
            >
        >[];


    const edges = [

        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],

        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],

        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],

    ];


    ctx.strokeStyle =
        "#FFD700";


    ctx.lineWidth =
        1.6;


    ctx.beginPath();


    for (
        const [
            a,
            b
        ] of edges
    ) {

        ctx.moveTo(

            p[a].x,

            p[a].y

        );


        ctx.lineTo(

            p[b].x,

            p[b].y

        );

    }


    ctx.stroke();

}