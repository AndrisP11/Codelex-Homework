export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
const protectEmail = (email:string): string=>{
     let index:number = email.indexOf("@")
    let result:string ="";
    let i: number = 3;
    while(i>0){
        result= result+email.charAt(index-i)
        i= i-1;
    }
    //let result = email.charAt(index-3)
    //result= result+email.charAt(index-2) 
    //result= result+email.charAt(index-1)

    return email.replace(result,"...")
   
 } 
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com