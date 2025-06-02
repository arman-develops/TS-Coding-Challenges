// Challenge 1: Sum Of Positives
function sumOfPositives(numArray: number[]):number {
    let total:number = 0;
    for (let i:number = 0; i < numArray.length; i++) {
        if(numArray[i] > 0) {
            total = total + numArray[i]
        }
    }
    return total;
}
// console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));

// Challenge 2: FInd Maximum Value
function findMax(numArray: number[]):number {
    let max:number = 0;
    for (let i:number = 0; i < numArray.length; i++) {
        if(numArray[i] > numArray[i + 1]) {
            max = numArray[i];
        }
    }
    return max;
}
// console.log(findMax([3, 7, 2, 9, 5]));

// Challenge 3: Election Winner
type Candidates = {
    name: string,
    votes: number
}[];
type Winner = {
    name: string,
    votes: number
};
function findWinner(objArray:Candidates) {
    let winner:Winner = objArray[0];
    for(let i:number = 0; i < objArray.length; i++) {
        if(objArray[i].votes > winner.votes) {
            winner = objArray[i];
        }
    }
    return winner;
}
// const candidates = [
//     { name: "Alice", votes: 50 },
//     { name: "Bob", votes: 75 },
//     { name: "Charlie", votes: 65 }
// ];
// console.log(findWinner(candidates));