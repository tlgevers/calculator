
export const calculate = (args) => {
    console.log("calculate args:", args)
}

export const concatenateArgs = (args, A) => {
    var numbers = /^[0-9]+$/;
    if (A.match(numbers) === null) {
        console.log("is a symbol") 
        return args + "\n" + A + "\n"
    }
    return args + A
}
