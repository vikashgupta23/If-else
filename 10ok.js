/*
Write a program to take two numbers from the user and determine the greater of those two given numbers.

Test Case1:
Input:
20
3
Output:
20

Test Case2:
Input:
5
7
Output:
7
*/
const input =require("readline-sync")
let a=input.questionInt("Enter the value of a:")
let b=input.questionInt("Enter the value of b:")
if(a>b)
{
    max=a;
}
else
{
    max=b;
}
console.log("max is:",max);