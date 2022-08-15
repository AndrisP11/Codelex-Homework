import { Cell } from "./Cell";

export class GameField {
  apples: Cell[] = [
    new Cell(18, 16),
    new Cell(20, 16),
    new Cell(22, 16),
    new Cell(24, 16),
    new Cell(26, 16)
  ];
  /**
   * Called when level completed
   */
  seed(): void {
    this.apples.forEach(apple => {
      return apple.x = Math.floor(Math.random()*45), 
             apple.y = Math.floor(Math.random()*25)

    })
  }

  getApples(): Cell[] {
    return this.apples
  }

  isAppleInside(cell: Cell): boolean {
    let appleInside: boolean = true

    if(this.apples[0].x === cell.x && this.apples[0].y === cell.y){
      appleInside = true
      return appleInside
    } else if(this.apples[1].x === cell.x && this.apples[1].y === cell.y){
      appleInside = true
      return appleInside
    } else if(this.apples[2].x === cell.x && this.apples[2].y === cell.y){
      appleInside = true
      return appleInside
    } else if(this.apples[3].x === cell.x && this.apples[3].y === cell.y){
      appleInside = true
      return appleInside
    } else if(this.apples[4].x === cell.x && this.apples[4].y === cell.y){
      appleInside = true
      return appleInside
    }else {
      appleInside = false
    }
    return appleInside
    
  }

  removeApple(cell: Cell): void {
    this.apples.forEach(apple => {
      if (apple.x === cell.x && apple.y === cell.y){
        return apple.x = -1,apple.y = -1
      }else {
        return apple
      }
    })
  }

  isEmpty(): boolean {
      
      if (this.apples[0].x === -1 && this.apples[0].y === -1) {
        if (this.apples[1].x === -1 && this.apples[1].y === -1){
          if (this.apples[2].x === -1 && this.apples[2].y === -1){
            if (this.apples[3].x === -1 && this.apples[3].y === -1){
              if (this.apples[4].x === -1 && this.apples[4].y === -1){
                return true;
              }else {return false}
            }else {return false}
          }else {return false}
        }else {return false}
      }else {return false}
      
  }
}