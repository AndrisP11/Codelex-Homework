import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0)
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)]
  direction: Direction = "Right"
  setDirection(newDirection: Direction) {
    if(this.direction === "Right" && newDirection === "Left")return;
    if(this.direction === "Left" && newDirection === "Right")return;
    if(this.direction === "Down" && newDirection === "Up")return;
    if(this.direction === "Up" && newDirection === "Down")return;
    this.direction = newDirection
  }

  move() {
    
    const oldHeadPosision =new Cell(this.head.x, this.head.y)
    //this.head = new Cell(this.head.x+1, this.head.y)
    if(this.direction === "Right"){
      this.head = new Cell(this.head.x+1, this.head.y)
    }else if (this.direction === "Left"){
      this.head = new Cell(this.head.x-1, this.head.y)
    }else if (this.direction === "Down"){
      this.head = new Cell(this.head.x, this.head.y+1)
    }else if (this.direction === "Up"){
      this.head = new Cell(this.head.x, this.head.y-1)
    }
    this.tail.push(oldHeadPosision)
    this.tail.shift()
  }
  grow() {
    this.tail.push(new Cell(this.tail[this.tail.length-1].x+1,this.tail[this.tail.length-1].y))
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return "Right";
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    let takenSnake = false
    for(let i =0; i< this.tail.length;i++){
      if(this.tail[i].x === cell.x && this.tail[i].y === cell.y){
        takenSnake = true
        return takenSnake
      }
    }
    return takenSnake
  }
}