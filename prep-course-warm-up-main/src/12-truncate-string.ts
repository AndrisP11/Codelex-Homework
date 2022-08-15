export {};

function truncateString(str: string, num: number): string {
   /* if (num > str.length){
      return str;
    } 
    else {
      //return str.slice(0, num);
      return str.substring(0,num);
    }*/
    let res: string = "";
    for (let i=0;i<num;i++){
      res=res+str[i];
    }
    return res
  }


console.log(truncateString("CODELEX", 4)); // Expected output: CODE
