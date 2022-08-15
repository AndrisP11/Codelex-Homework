export {};

/**
 * The good ol' this.. Possibly the most confusing topic in the whole language
 * and one that interviewers often use to make you (me) feel miserable in interviews 😭
 * If you find the docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * also confusing, try some of these resources:
 *  - https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
 *  - https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
 *  - https://www.youtube.com/watch?v=Pi3QC_fVaD0 (JavaScript this Keyword Explained In 3 Minutes)
 *  - https://www.youtube.com/watch?v=YOlr79NaAtQ (What is THIS in JavaScript? in 100 seconds)
 */

/*function Circle(this:any, radius: number){
  const Pi: number = Math.PI;
  this.radius = radius 
  this.area = function() {
     const res = Pi*radius*radius
     return res.toFixed(2)
  };
  this.perimeter = function() {
    const res = 2 * Pi * this.radius
    return res.toFixed(2)
  };
}


const c = new (Circle as any) (3);*/

class Circle {
	radius: number;
	area: () => number | string;
	perimeter: () => number | string;
	
constructor(radius: number) {
	this.radius = radius;
	this.area = function() {
		return (Math.PI * this.radius * this.radius).toFixed(2)
		};
	this.perimeter = function() {
		return (2 * Math.PI * this.radius).toFixed(2)
		};
		}}
const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85


/**
 * This was the last exercise in this repository.
 * Congratulations on getting this far!
 */

 /*The firs thing we did is type the 'this' keyword in the Employee function - explicitly setting it to "any".

 This way we won't get an error when setting properties and methods on this.
 
 We used a type assertion to type the Employee function as "any" right before using the 'new' keyword.*/