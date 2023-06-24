// Canvas settings
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 300;

canvas.style.background = "red";

// background: #1D1E18
// 1. #6B8F71
// 2. #AAD2BA
// 3. #D9FFF5
// 4. #B9F5D8

context.beginPath();
context.moveTo(0,0);
context.lineTo(canvas.width, canvas.height);
context.stroke();

// how dataPoint works >> stores the values based on the day entered. 
const dataPoint = {
    year,
    month,
    date,
    weight,
    bmi,
    bodyfat,
}

// how data works >> const data = [{dataPoint1},{dataPoint2},{dataPoint3}];
const data = [];