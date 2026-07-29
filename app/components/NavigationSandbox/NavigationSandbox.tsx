"use client";

import { useState } from "react";
import styles from "./NavigationSandbox.module.css";
import { Cell } from "./types";
import { findPath } from "./astar";

const ROWS = 16;
const COLS = 16;

type Mode = "wall" | "erase" | "start" | "goal";

function createGrid(): Cell[][] {
    return Array.from({ length: ROWS }, (_, row) =>
        Array.from({ length: COLS }, (_, col) => ({
            row,
            col,
            type: "empty",
        }))
    );
}

export default function NavigationSandbox() {

    const [grid, setGrid] = useState<Cell[][]>(createGrid());

    const [isDrawing, setIsDrawing] = useState(false);

    const [mode, setMode] = useState<Mode>("wall");

    const [startCell, setStartCell] =
        useState<{ row: number; col: number } | null>(null);

    const [goalCell, setGoalCell] =
        useState<{ row: number; col: number } | null>(null);

    const [isRunning, setIsRunning] = useState(false);

    const [status, setStatus] = useState("-");

    function updateCell(row: number, col: number) {

        if (mode === "start")
            setStartCell({ row, col });

        if (mode === "goal")
            setGoalCell({ row, col });

        setGrid(prev =>
            prev.map(r =>
                r.map(cell => {

                    const isClicked =
                        cell.row === row &&
                        cell.col === col;

                    switch (mode) {

                        case "wall":

                            if (isClicked && cell.type === "empty")
                                return { ...cell, type: "wall" };

                            return cell;

                        case "erase":

                            if (isClicked)
                                return { ...cell, type: "empty" };

                            return cell;

                        case "start":

                            if (cell.type === "start")
                                return { ...cell, type: "empty" };

                            if (isClicked)
                                return { ...cell, type: "start" };

                            return cell;

                        case "goal":

                            if (cell.type === "goal")
                                return { ...cell, type: "empty" };

                            if (isClicked)
                                return { ...cell, type: "goal" };

                            return cell;

                        default:

                            return cell;

                    }

                })
            )
        );

    }

    function resetGrid() {

        setGrid(createGrid());

        setStartCell(null);

        setGoalCell(null);

        setMode("wall");

        setStatus("-");

    }

    async function runAStar() {

        if (isRunning) return;

        // Remove previous animation
        setGrid(prev =>
            prev.map(row =>
                row.map(cell => {

                    if (
                        cell.type === "visited" ||
                        cell.type === "path"
                    ) {
                        return {
                            ...cell,
                            type: "empty",
                        };
                    }

                    return cell;

                })
            )
        );

        setIsRunning(true);

        setStatus("Searching...");

        const result = findPath(grid);

        // Animate visited nodes
        for (const node of result.visited) {

            await new Promise(resolve => setTimeout(resolve, 20));

            setGrid(prev =>
                prev.map(row =>
                    row.map(cell => {

                        if (
                            cell.row === node.row &&
                            cell.col === node.col &&
                            cell.type === "empty"
                        ) {

                            return {
                                ...cell,
                                type: "visited",
                            };

                        }

                        return cell;

                    })
                )
            );

        }

        if (result.path.length === 0) {

            setStatus("Destination unreachable");

            setIsRunning(false);

            return;

        }

        // Animate shortest path
        for (const node of result.path) {

            await new Promise(resolve => setTimeout(resolve, 40));

            setGrid(prev =>
                prev.map(row =>
                    row.map(cell => {

                        if (
                            cell.row === node.row &&
                            cell.col === node.col &&
                            cell.type !== "start" &&
                            cell.type !== "goal"
                        ) {

                            return {
                                ...cell,
                                type: "path",
                            };

                        }

                        return cell;

                    })
                )
            );

        }

        setStatus("Path Found");

        setIsRunning(false);

    }

    return (

        <div
            className={styles.sandbox}
            onMouseUp={() => setIsDrawing(false)}
            onMouseLeave={() => setIsDrawing(false)}
        >

            <div className={styles.header}>

                <p>
                    Draw obstacles to create your own environment.
                </p>

            </div>

            <div className={styles.toolbar}>

                {(["wall", "start", "goal", "erase"] as Mode[]).map(item => (

                    <button
                        key={item}
                        className={
                            mode === item
                                ? styles.activeButton
                                : styles.button
                        }
                        onClick={() => setMode(item)}
                        disabled={isRunning}
                    >

                        {item.charAt(0).toUpperCase() + item.slice(1)}

                    </button>

                ))}

                <button
                    className={styles.button}
                    onClick={runAStar}
                    disabled={isRunning}
                >
                    Find Path
                </button>

                <button
                    className={styles.button}
                    onClick={() => {

                        setGrid(prev =>
                            prev.map(row =>
                                row.map(cell => {

                                    if (
                                        cell.type === "visited" ||
                                        cell.type === "path"
                                    ) {

                                        return {
                                            ...cell,
                                            type: "empty",
                                        };

                                    }

                                    return cell;

                                })
                            )
                        );

                        setStatus("-");

                    }}
                    disabled={isRunning}
                >
                    Clear Path
                </button>

                <button
                    className={styles.button}
                    onClick={resetGrid}
                    disabled={isRunning}
                >
                    Reset
                </button>

            </div>

            <p className={styles.status}>
                {status}
            </p>

            <div className={styles.grid}>

                {grid.flat().map(cell => (

                    <div
                        key={`${cell.row}-${cell.col}`}

                        className={`
                            ${styles.cell}
                            ${cell.type === "wall" ? styles.wall : ""}
                            ${cell.type === "start" ? styles.start : ""}
                            ${cell.type === "goal" ? styles.goal : ""}
                            ${cell.type === "visited" ? styles.visited : ""}
                            ${cell.type === "path" ? styles.path : ""}
                        `}

                        onMouseDown={() => {

                            if (isRunning) return;

                            setIsDrawing(true);

                            updateCell(cell.row, cell.col);

                        }}

                        onMouseEnter={() => {

                            if (isRunning) return;

                            if (!isDrawing) return;

                            if (mode === "wall" || mode === "erase")
                                updateCell(cell.row, cell.col);

                        }}

                    />

                ))}

            </div>

        </div>

    );

}