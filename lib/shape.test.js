const {Shape, Circle, Square, Triangle} = require("./shape");

describe('Shape', ()=>{
    it('should set the color for the shape', () =>{
        const shape = new Shape();
        shape.setColor('red');
        expect(shape.color).toEqual('red');
    })
} )

describe('Circle', () =>{
    it('should render a blue circle', () => {
        const shape = new Circle();
        shape.setColor('blue')
        const expected = `<circle cx=*150* cy=*100* r*75* style=*fill:blue*/>`
        expect(shape.render()).toEqual(expected);
    })
})

describe('Square', () =>{
    it('should render a purple Square', () => {
        const shape = new Square();
        shape.setColor('purple')
        const expected =  `<rect cx=*50* y=*50* width=*200* style=*fill:purple*/>`
        expect(shape.render()).toEqual(expected);
    })
})

describe('Triangle', () =>{
    it('should render a green triangle', () => {
        const shape = new Triangle();
        shape.setColor('green')
        const expected = `<polygon points=*150,50 50,150 250,150* style=*fill:green*/>`
        expect(shape.render()).toEqual(expected);
    })
})