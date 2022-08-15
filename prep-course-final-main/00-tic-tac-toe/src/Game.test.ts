import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    //expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should start with blank state", () => {
    const game = new Game();

    game.onClick(0)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    //expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should place place correct value on clicked cell", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    //expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should win if row1 taken by player", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if row2 taken by player", () => {
    const game = new Game();

    game.onClick(3)
    game.onClick(0)
    game.onClick(4)
    game.onClick(1)
    game.onClick(5)

    expect(game.getCells()).toEqual([
      "O", "O", "-",
      "X", "X", "X",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if row3 taken by player", () => {
    const game = new Game();

    game.onClick(6)
    game.onClick(0)
    game.onClick(7)
    game.onClick(4)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "O", "-", "-",
      "-", "O", "-",
      "X", "X", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if column taken by player", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(3)
    game.onClick(4)
    game.onClick(6)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "X", "O", "-",
      "X", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if column2 taken by player", () => {
    const game = new Game();

    game.onClick(1)
    game.onClick(0)
    game.onClick(4)
    game.onClick(3)
    game.onClick(7)

    expect(game.getCells()).toEqual([
      "O", "X", "-",
      "O", "X", "-",
      "-", "X", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if column3 taken by player", () => {
    const game = new Game();

    game.onClick(2)
    game.onClick(0)
    game.onClick(5)
    game.onClick(4)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "O", "-", "X",
      "-", "O", "X",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if vertical taken by player", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(3)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "O", "X", "-",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if vertical2 taken by player", () => {
    const game = new Game();

    game.onClick(2)
    game.onClick(1)
    game.onClick(4)
    game.onClick(3)
    game.onClick(6)

    expect(game.getCells()).toEqual([
      "-", "O", "X",
      "O", "X", "-",
      "X", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("don't change a cell if it's full", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(0)
   

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    //expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
});