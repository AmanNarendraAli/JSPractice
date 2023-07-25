//WAP tp search a number in an array using for and while loop;
const { performance} = require('perf_hooks');
let start= performance.now();
var arr = new Array(100000000);
for(let i=0;i<arr.length;i++)
{
    arr[i]=i;
}
let x = 99999999;
let flag = false;
let i=0;
while(i<arr.length)
{
    if(arr[i]==x)
    {
        console.log("Found at position " + i);
        flag = true;
        break;
    }
    i++;
}
if(flag==false)
{
    console.log("Not found");
}
let end=performance.now();
console.log("Time taken: " + (end-start));