// require shape.js
const {Shape,Circle,Square,Triangle} = require('shape');
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
    
        default:
            break;
    }
})






// generate logo.svg


