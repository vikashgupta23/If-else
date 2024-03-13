/*
Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).

Test Case1:

Input:
98
13
29
58

Output:
98

*/
const input=require("readline-sync")
let a=input.questionInt("Enter a:")
let b=input.questionInt("Enter b:")
let c=input.questionInt("Enter c:")
let d=input.questionInt("Enter d:")
let max;
max=a;
if(max<b)
{
    max=b;
}
if(max<c)
{
    max=c;
}
if(max<d)
{
    max=d;
}
console.log("Greater number is :",max)