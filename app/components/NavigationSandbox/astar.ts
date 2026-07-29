import { Cell, Node } from "./types";

const directions = [

    [-1,0],
    [1,0],
    [0,-1],
    [0,1]

];

function heuristic(

    r1:number,
    c1:number,

    r2:number,
    c2:number

){

    return Math.abs(r1-r2)+Math.abs(c1-c2);

}

function key(r:number,c:number){

    return `${r},${c}`;

}

export function findPath(grid:Cell[][]){

    let start:Cell|null=null;

    let goal:Cell|null=null;

    for(const row of grid){

        for(const cell of row){

            if(cell.type==="start")
                start=cell;

            if(cell.type==="goal")
                goal=cell;

        }

    }

    if(!start || !goal){

        return{

            visited:[],

            path:[]

        };

    }

    const open:Node[]=[];

    const closed=new Set<string>();

    const visited:Node[]=[];

    open.push({

        row:start.row,

        col:start.col,

        g:0,

        h:heuristic(
            start.row,
            start.col,
            goal.row,
            goal.col
        ),

        f:0,

        parent:null

    });

    while(open.length){

        open.sort((a,b)=>a.g+a.h-(b.g+b.h));

        const current=open.shift()!;

        visited.push(current);

        if(

            current.row===goal.row &&
            current.col===goal.col

        ){

            const path:Node[]=[];

            let temp=current;

            while(temp){

                path.push(temp);

                temp=temp.parent!;

            }

            path.reverse();

            return{

                visited,

                path

            };

        }

        closed.add(key(current.row,current.col));

        for(const [dr,dc] of directions){

            const nr=current.row+dr;

            const nc=current.col+dc;

            if(

                nr<0 ||
                nr>=grid.length ||
                nc<0 ||
                nc>=grid[0].length

            ) continue;

            const neighbour=grid[nr][nc];

            if(neighbour.type==="wall")
                continue;

            if(closed.has(key(nr,nc)))
                continue;

            const g=current.g+1;

            const h=heuristic(

                nr,
                nc,

                goal.row,
                goal.col

            );

            const existing=open.find(

                n=>

                n.row===nr &&
                n.col===nc

            );

            if(existing){

                if(g<existing.g){

                    existing.g=g;

                    existing.f=g+h;

                    existing.parent=current;

                }

            }

            else{

                open.push({

                    row:nr,

                    col:nc,

                    g,

                    h,

                    f:g+h,

                    parent:current

                });

            }

        }

    }

    return{

        visited,

        path:[]

    };

}