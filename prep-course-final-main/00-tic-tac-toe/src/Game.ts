export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
  turn: XO = "X"
  getCells(): XO[] {
    return this.cells
  }

  getTurn(): XO {
    const countX = this.getCells().filter(cell =>cell === "X").length
    const countO = this.getCells().filter(cell =>cell === "O").length

    return countX === countO ? "X" : "O"
  }

  getWinner(): XO {
    //rows
    
    if(this.getCells()[0] === this.getCells()[1] && this.getCells()[0] === this.getCells()[2] && this.getCells()[0] !== "-"){
      return this.getCells()[0]
    }
    if(this.getCells()[3] === this.getCells()[4] && this.getCells()[3] === this.getCells()[5] && this.getCells()[3] !== "-"){
      return this.getCells()[3]
    }
    /*if(this.cells[6] === this.cells[7] && this.cells[6] === this.cells[8]){
      return this.cells[6]
    }*/
    if(this.getCells()[6] === this.getCells()[7] && this.getCells()[6] === this.getCells()[8] && this.getCells()[6] !== "-"){
      return this.getCells()[6]
    }
    //columns
    if(this.getCells()[0] === this.getCells()[3] && this.getCells()[0] === this.getCells()[6] && this.getCells()[0] !== "-"){
      return this.getCells()[0]
    }
    if(this.getCells()[1] === this.getCells()[4] && this.getCells()[1] === this.getCells()[7] && this.getCells()[1] !== "-"){
      return this.getCells()[1]
    }
    if(this.getCells()[2] === this.getCells()[5] && this.getCells()[2] === this.getCells()[8] && this.getCells()[2] !== "-"){
      return this.getCells()[2]
    }
    //diagonal
    if(this.getCells()[2] === this.getCells()[4] && this.getCells()[2] === this.getCells()[6] && this.getCells()[2] !== "-"){
      return this.getCells()[2]
    }
    if(this.getCells()[0] === this.getCells()[4] && this.getCells()[0] === this.getCells()[8] && this.getCells()[0] !== "-"){
      return this.getCells()[0]
    }
    return "-";
  }

  isTie(): boolean {
    if(this.cells.includes("-")){
    return false
  }else{
      return true
    }
  }

  onClick(i: number): void {
   if(this.cells[i] === "-"){
    //console.log(`cell ${i} clicked`);
    this.cells[i] = this.getTurn()} 

  /*  if(this.cells[i] !== "-"||this.getWinner() !== "-")return
    //this.turn = this.turn === "X" ? "O" : "X"
    if(this.turn === "X"){
      return this.turn= "O}
      else{
        return this.turn = "X"*/
  }

  restart(): void {
    this.cells=["-", "-", "-", "-", "-", "-", "-", "-", "-"]
    console.log("restart called");
    this.turn = "X"
  }
}
