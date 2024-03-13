/*
Write a program to take 3 numbers from the user and output the second max of 3 numbers.
(First, do it in the normal way then do it by using 3 comparisons)

Test Case1:
Input:
5
4
6
Output:
5
*/
const input=require("readline-sync")
let a=input.questionInt("Enter the value of a:")
let b=input.questionInt("Enter the value of b:")
let c=input.questionInt("Enter the value of c:")
if(a>b)
{
    max=a;
}
else
{
    max=b;
}
if(max<c)
{
    console.log("Second max is:",max);
}
else
{
    console.log("Second max is:",c);
}

