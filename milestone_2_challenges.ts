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

// Challenge 7: Sum of Even Numbers
function sumEvenNumbers(numArray:number[]):number {
    let sum:number = 0;
    for(let i:number = 0; i < numArray.length; i++) {
        if(numArray[i] % 2 == 0) {
            sum += numArray[i];
        }
    }
    return sum;
}
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// Challenge 8: Difference between the sum of even and odd numbers
function differenceEvenOdd(numArray:number[]):number {
    let evenTotal:number = 0, oddTotal:number = 0;
    for(let i:number = 0; i < numArray.length; i++) {
        if(numArray[i] % 2 == 0) {
            evenTotal += numArray[i];
        }else {
            oddTotal += numArray[i];
        }
    }
    return evenTotal - oddTotal;
}
// console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));

// Challenge 9: Count Truthy
type myTypes = {
    a: number,
    b: string,
    c: boolean,
    d: number,
    e: null
}
function countTruthy(obj: myTypes) {
    let count: number = 0
    const values = Object.values(obj)
    for(let i:number = 0; i < values.length; i++) {
        if(values[i]) {
            count += 1
        }
    }
    return count;
}
// console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

// Challenge 10: Average of Numbers
function average(numArray:number[]):number {
    let sum:number = 0, len:number = numArray.length;
    if(len === 0) {
        return 0;
    } else {
        for(let i = 0; i < len; i++) {
            sum += numArray[i];
        }
    }
    
    return sum / len;
}
// console.log(average([2, 4, 6, 8]));
// console.log(average([]));

// Challenge 11: Linear Search
function linearSearch(arr:number[], val:number):number {
    for(let i:number = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
// console.log(linearSearch([5, 3, 7, 1, 4], 7));
// console.log(linearSearch([5, 3, 7, 1, 4], 10));

// Challenge 12: Reverse Linear Search
function reverseLinearSearch(arr:number[], val:number) {
    for(let i:number = arr.length - 1 ; i >= 0; i--) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
// console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
// console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));

// Challenge 13: Linear Search All Indices
function linearSearchAll(arr:number[], val:number):number[] {
    let indices:number[] = [];
    for(let i:number = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            indices.push(i);
        }
    }
    return indices;
}
// console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));
// console.log(linearSearchAll([5, 3, 7, 1, 4], 10));

// Challenge 14: Count Occurrences
function countOccurrences(arr: string[]): { [key: string]: number } {
    const obj: { [key: string]: number } = {};

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (obj[item] === undefined) {
            obj[item] = 1;
        } else {
            obj[item] += 1;
        }
    }

    return obj;
}
// console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));

// Challenge 15: Remove Duplicates
function removeDuplicates(arr:number[]):number[] {
    let newArr:number[] = [];
    for(let i = 0; i < arr.length; i++) {
        let isDuplicated = false;
        for(let j = 0; j < newArr.length; j++) {
            if(arr[i] === newArr[j]) {
                isDuplicated = true;
                break;
            }
        }
        if(!isDuplicated) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

// Challenge 16: Most Frequent
function mostFrequent(arr: (number | string)[]) {
    let count:{[key:string]: number} = {};
    let maxCount:number = 0;
    let mostFrequentValue = null;

    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if(count[item] === undefined) {
            count[item] = 1;
        } else {
            count[item] += 1;
        }

        if(count[item] > maxCount) {
            maxCount = count[item];
            mostFrequentValue = item;
        }
    }
    return mostFrequentValue;
}
// console.log(mostFrequent([1, 2, 3, 2, 4, 1, 2]));
// console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));