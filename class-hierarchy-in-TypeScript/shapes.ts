class Shape {
    color: string;

    constructor(color: string) {
        this.color = color
    }

    getArea(): number {
        throw Error('NotImplementedError')
    }
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color)
        this.radius = radius
    }

    override getArea(): number { return 3.14159 * (this.radius * this.radius) }

}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(color: string, width: number, height: number) {
        super(color)
        this.width = width
        this.height = height
    }

    override getArea(): number { return (this.width * this.height) }

}


const circle = new Circle('red', 5)
const rectangle = new Rectangle('blue', 4, 6)

console.log('Circle Area',circle.getArea())
console.log('Rectangle Area',rectangle.getArea())

