// create code fo generate svg shapes
class Shape {
    constructor(){
        this.color = "";
    }
    setColor(color){
        this.color = color;
    }
}
// circle
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r"75" style="fill:${this.color}"/>`
    }
}
// square
class Square extends Shape {
    render(){
        return `<rect cx="50" y="50" width="200" style="fill:${this.color}"/>`
    }
}
// triangle
class Triangle extends Shape {
    render(){
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`
    }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}