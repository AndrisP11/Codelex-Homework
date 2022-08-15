import { Snake } from "./Snake";
import { Cell } from "./Cell";

describe("Snake", () => {
  it("should take three cells at the beginning", () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);
  });

  it("should move Right", () => {
    const snake = new Snake();
    snake.setDirection("Right")
    snake.move()
    //expect(snake.getDirection()).toEqual("Right");
    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("should move Down", () => {
    const snake = new Snake();
    snake.setDirection("Down")
    snake.move()
   // expect(snake.getDirection()).toEqual("Down");
    expect(snake.getHead()).toEqual(new Cell(2, 1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("should move Up", () => {
    const snake = new Snake();
    snake.setDirection("Up")
    snake.move()
    //expect(snake.getDirection()).toEqual("Up");
    expect(snake.getHead()).toEqual(new Cell(2, -1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("should move Left", () => {
    const snake = new Snake();
    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Left")
    snake.move()
    //expect(snake.getDirection()).toEqual("Left");
    expect(snake.getHead()).toEqual(new Cell(1, 1));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)]);
  });

  it("should not move from Right to Left", () => {
    const snake = new Snake();
    
    snake.setDirection("Left")
    snake.move()

    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("should not move from Left to Right", () => {
    const snake = new Snake();
    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Left")
    snake.move()
    snake.setDirection("Right")
    snake.move()

    expect(snake.getHead()).toEqual(new Cell(0, 1));
    expect(snake.getTail()).toEqual([new Cell(2, 1), new Cell(1, 1)]);
  });

  it("should not move from Down to Up", () => {
    const snake = new Snake();
    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Up")
    snake.move()
    

    expect(snake.getHead()).toEqual(new Cell(2, 2));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)]);
  });

  it("should not move from Up to Down", () => {
    const snake = new Snake();
    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Right")
    snake.move()
    snake.setDirection("Up")
    snake.move()
    snake.setDirection("Down")
    snake.move()

    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(3, 2), new Cell(3, 1)]);
  });

  it("Snake has grown by one segment", () => {
    const snake = new Snake();

    snake.grow()
    
    expect(snake.tail.length).toEqual(3);
  });

  it("Snake has bitten itself", () => {
    const snake = new Snake();

    snake.grow()
    snake.grow()
    snake.grow()
    
    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Down")
    snake.move()
    snake.setDirection("Left")
    snake.move()
    snake.setDirection("Up")
    snake.move()
    snake.setDirection("Right")
    snake.move()
    
    let taken = snake.isTakenBySnake(snake.getHead())
    
    expect(taken).toEqual(true);
  });
});

