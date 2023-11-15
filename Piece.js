const Layouts = [
    [[0,0], [1,0], [2,0], [3,0]],
    [[1,0], [0,1], [1,1], [2,1]] ,
    [[0,0], [0,1], [1,1], [2,1]],
    [[0,0], [1,0], [0,1], [1,1]],
    [[2,0], [0,1], [1,1], [2,1]],
    [[1,0], [2,0], [0,1], [1,1]]
    [[1,0], [2,0], [0,1], [1,1]]
]

const Colors=['red','green','blue','purple','yellow','cyan']

class Piece{
    constructor(x,y,pLayout, pColor){
        this.x=x;
        this.y=y;
        this.Layout=pLayout;
        this.Color=pColor;
    }
}