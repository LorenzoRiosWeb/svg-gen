// require shape.js
const {Shape,Circle,Square,Triangle} = require('./lib/shape');
const Inquirer = require('inquirer');
const fs = require('fs')
// create a prompt so the user can enter up to 3 characters for the logo

function validate(input){
    return input.length ===3;
}
const Questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo',
        validate: (input) => input.length <= 3,
        
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex):',
        
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Choose a shape',
        choice: ['Triangle', 'Circle', 'Square'],
        
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',
        
    },
];
// Create prompt that call questions array
Inquirer.prompt(Questions).then((answers) => {
    const {text , textColor, shape, shapeColor} = answers;
    const shapeObj = new Shape();
    let svgElement = '';

    shapeObj.setColor(shapeColor);
    switch (shape) {
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgElement = circle.render() 
            break;
        case 'Square':
            const square = new Square();
            circle.setColor(shapeColor);
            svgElement = square.render() 
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgElement = triangle.render() 
            break;
    }
    let x = 150, y = 120;
    if(shape === 'Square'){
        y = 145;
    } else if (shape === 'triangle'){
        y = 135;
    }
    
    const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${svgElement}
    <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-amchor="middle">${text}</text>
  </svg>`
    fs.writeFileSync('logo.svg', finalSvg);
    
    console.log('Generated logo.svg!!')
})



