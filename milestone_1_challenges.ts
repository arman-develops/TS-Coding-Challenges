//challenge 1: sum of two numbers
function addition (num1:number, num2:number): number {
    return num1 + num2;
}
// console.log(addition(3, 5)); //8
// console.log(addition(-6, 9)); //3

//challenge 2: convert minutes into seconds
function convert (minutes:number):number {
    return minutes * 60;
}
// console.log(convert(5)); //300
// console.log(convert(2)); //120

//challenge 3: Perimeter of a rectangle
function findPerimeter(length:number, width:number):number {
    return 2 * (length + width);
}
// console.log(findPerimeter(6, 7)); //26
// console.log(findPerimeter(20, 10)); //60

//challenge 4: Check negative
function isNegative(num:number):boolean {
    if(num < 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(isNegative(-23)); //23
// console.log(isNegative(55)); //55

//challenge 5: Can I drive
function canDrive(name:string, age:number):void {
    if(age > 18) {
        console.log(`${name} is old enough to drive.`);
    } else {
        console.log(`${name} is not old enough to drive yet.`);
    }
}
// canDrive("Jane", 22); //Jane is old enough to drive
// canDrive("June", 12); //June is not old enough to drive yet

//challenge 6: Largest number
function findLargest(a:number, b:number, c:number):number {
    if(a > b && a > c) {
        return a;
    }else if(b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
// console.log(findLargest(5, 9, 3)); //9
// console.log(findLargest(10, 10, 10)); //10
// console.log(findLargest(-1, -5, -3)); //-1

//challenge 7: BMI Calculator
function calculateBMI(weight:number, height:number):void {
    let BMI:number = weight / (height * height);
    let category:string = "";
    if(BMI < 18.5) {
        category = "Underweight";
    }else if (BMI > 18.5 && BMI < 24.9) {
        category = "Normal weight";
    }else if(BMI > 25 && BMI < 29.9) {
        category = "Overweight";
    }else {
        category = "Obese";
    }
    console.log(`Your BMI is ${BMI} - ${category}`);
}
// calculateBMI(68, 1.75); //Your BMI is 22.2 - Normal weight
// calculateBMI(85, 1.8); //Your BMI is 26.2 - Normal weight

//Challenge 8: Greetings based on time
function greetUser(name:string, hour:number):void {
    let greeting:string = "";
    if(hour <= 11 && hour >= 5) {
        greeting = `Good morning, ${name}`;
    }else if(hour >= 12 && hour <= 17) {
        greeting = `Good afternoon, ${name}`;
    }else  if(hour >= 18 && hour <= 21) {
        greeting = `Good evening, ${name}`;
    }else if(hour <= 4 || hour >= 22) {
        greeting = `Good night, ${name}`;
    }
    console.log(greeting);
}
// greetUser("Alice", 2);

//Challenge 9: FizzBuzz
function fizzBuzzCheck(num:number):string {
    let output:string = "";

    if(num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }

    if (num % 3 === 0) {
        return "Fizz";
    }
    if (num % 5 === 0) {
        return "Buzz";
    }
    if(output === "") {
        return num.toString();
    }
    return output
}
// console.log(fizzBuzzCheck(3));
// console.log(fizzBuzzCheck(10));
// console.log(fizzBuzzCheck(15));
// console.log(fizzBuzzCheck(7));

//challenge 10: Perimeter 2
function perimeter (i:string, num:number):number {
    let perimeter:number = 0;
    switch(i) {
        case "s":
            perimeter = 4 * num;
            break;
        case "c":
            perimeter = 6.28 * num;
            break;
        default:
            break;    
    }
    return perimeter;
}
// console.log(perimeter("s", 7));
// console.log(perimeter("c", 4));

// Challenge 11: Sum Of Even Numbers
function sumEvenNumbers(n:number):number {
    let sum:number = 0;
    for(let i = 0; i <= n; i++) {
        if(i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
// console.log(sumEvenNumbers(6));
// console.log(sumEvenNumbers(10));
// console.log(sumEvenNumbers(5));

//Challenge 12: Multiply by itself
function powerUp(num:number, times:number):number {
    let result:number = 1;
    for(let i = 0; i < times; i++) {
        result = result * num
    }
    return result;
}
// console.log(powerUp(2, 3));
// console.log(powerUp(0));
// console.log(powerUp(5, 0));
// console.log(powerUp(3, 4));

//challenge 13: Factorial Calculator
function factorial(n:number):number {
    if(n < 0) {
        console.log("Non-negative numbers only");
        return 0;
    }
    
    if(n == 0 || n == 1) {
        return 1;
    }
    
    return n * factorial(n-1);
}
// console.log(factorial(0));
// console.log(factorial(4));
// console.log(factorial(6));