import { GameField } from "./GameField";


describe("Game Field", () => {
  it("should have five apples present", () => {
    const field = new GameField();

    const apples = field.getApples();

    expect(apples.length).toBe(5);
  });

  it("is apple inside snake", () => {
    const field = new GameField();
   
   let applesInside =  field.isAppleInside(field.apples[0])
   

    expect(applesInside).toEqual(true);
  });

  it("apple is removed", () => {
    const field = new GameField();
   
    field.removeApple(field.apples[0])
   

    expect(field.apples[0].x).toEqual( -1 );
    expect(field.apples[0].y).toEqual( -1 );
  });

  it("field is empty of apples", () => {
    const field = new GameField();
   
    field.removeApple(field.apples[0])
    field.removeApple(field.apples[1])
    field.removeApple(field.apples[2])
    field.removeApple(field.apples[3])
    field.removeApple(field.apples[4])

    expect(field.isEmpty()).toEqual(true );
  });
});