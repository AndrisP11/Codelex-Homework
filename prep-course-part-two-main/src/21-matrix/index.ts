/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

import { idText } from "typescript"
import { parse } from "../00-acronym"

 
class Matrix {
    mat:string[]=[]

  constructor(private matrix: string) {
    this.matrix = matrix 
    this.mat = this.matrix.split("\n")
  }

  get rows() {
    return  this.mat.map(row => row.split(' ').map(n => Number.parseInt(n)));
  }

  get columns() {
    return this.rows[0].map((el, i) => {
			return this.rows.map(row => row[i])
		})
   /* this.columnsArr = this.mat.map(row => row.split(' '))
     for(let i= 0; i<3;i++){
          for(let j= 0; j<3;j++){
            return this.column2 = this.columnsArr[i]
          }}
          return parseInt(this.column2,10)*/
          //console.log(this.columnsArr[1][1])
         //  this.column2= [this.columnsArr[n][0],this.columnsArr[n][0],this.columnsArr[n][0]]
           // return console.log()
    //}
   

 
  }
}

export { Matrix };
