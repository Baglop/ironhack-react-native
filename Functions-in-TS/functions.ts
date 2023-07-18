function calculateSum(num1: number, num2: number): number {
    return num1 + num2
}

console.log("CalculateSum")
console.log("18 + 20 =", calculateSum(18, 20))
console.log("245 + 928 =", calculateSum(245, 928))
console.log("10 + 15 =", calculateSum(10, 15))

function isEven(num: number): boolean {
    return (num % 2 == 0)
}

console.log("\nIs Even")
console.log("18 isEven:", isEven(18))
console.log("5 isEven:", isEven(5))
console.log("20 isEven:", isEven(20))

function reverseString(str: string): string {
    const splitStr = str.split("")
    let newStr = ""

    for (let i = splitStr.length - 1; i >= 0; i--) {
        newStr += splitStr[i]
    }

    return newStr
}

console.log("\nReverse String")
console.log("Reversed String =>", reverseString("Reversed String"))
console.log("Hola =>", reverseString("Hola"))
console.log("Adios =>", reverseString("Adios"))

const calculateEverage = (nums: number[]): number => {
    let numSum = 0

    nums.map(num => {
        numSum = numSum + num
    })

    return (numSum / nums.length)
}

console.log("\nEverage")
console.log("[10, 9, 8, 5, 10] =", calculateEverage([10, 9, 8, 5, 10]))
console.log("[5, 5, 5] =", calculateEverage([5, 5, 5]))
console.log("[200, 100, 300, 100, 500] =", calculateEverage([200, 100, 300, 100, 500]))

type MathOperation = (a: number, b: number) => number

const multiply: MathOperation = (num1, num2) => num1 * num2

console.log("\nMultiply")
console.log("2 x 10 =", multiply(2, 10))
console.log("5 x 5 =", multiply(5, 5))
console.log("176 x 49 =", multiply(176, 49))