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
    let BMI = weight / (height * height);
    let category = "";
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