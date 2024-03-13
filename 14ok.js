/*
Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)

Test Case1:
Input:
20
3
43

Output:
43

*/

const input=require("readline-sync")
let a=input.questionInt("Enter a:")
let b=input.questionInt("Enter b:")
let c=input.questionInt("Enter c:")
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
else
{
    max;
}
console.log("Greater number is :",max)