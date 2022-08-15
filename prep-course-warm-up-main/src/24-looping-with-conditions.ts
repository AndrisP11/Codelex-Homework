export {};

function onlyTheAces(arr:string[]): string[] {
     //return arr.filter(word => word === "Ace" );

     let newArr: string[] = [];
     for (let i = 0; i < arr.length; i++){
        if(arr[i] === "Ace"){
            newArr.push("Ace");
        }
     }
    return newArr


}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
