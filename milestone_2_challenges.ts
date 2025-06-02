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

// Challenge 4: Longest Word
function findLongestWord(wordArray: string[]):string {
    let longestWord:string = wordArray[0]
    for(let i:number = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > longestWord.length){
            longestWord = wordArray[i];
        }
    }
    return longestWord;
}
// console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));

//Challenge 5: Count Properties
type Person = {
    name: string,
    age: number,
    city: string
};
function countProperties(obj:Person):number {
    let count:number = 0;
    for (let i:number = 0; i < Object.keys(obj).length; i++) {
        count += i;
    }
    return count;
}
// console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

// Challenge 6: Filter By Length
function filterByLength(arr:string[], len:number): string[] {
    let filteredArray:string[] = [];
    for(let i:number = 0; i < arr.length; i++) {
        if(arr[i].length >= len) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
// console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));