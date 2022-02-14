// These variables are in the Global Scope.
// They can be accessed (and modified!) from anywhere
const THE_ONE_STRING = "One string to rule them all";
let THE_ANSWER_TO_LIFE_THE_UNIVERSE_AND_EVERYTHING = 42;
let THERE_BE_LIGHT = true;

const conjunctionFunction = () => {
    // These variables are defined inside a function (in this case, 
    // conjunctionFunction()) and are therefore scoped inside that function.
    // Attempting to use these variables outside the scope of the function
    // will result in an error.
    const functionScopedString = "I only exist inside my function!";
    let functionScopedNumber = 1000000;

    // this would result in a reference error if I tried it outside of 
    // this function.
    console.log(`Let's add some numbers: ${functionScopedNumber} + ${THE_ANSWER_TO_LIFE_THE_UNIVERSE_AND_EVERYTHING} 
    = ${functionScopedNumber + THE_ANSWER_TO_LIFE_THE_UNIVERSE_AND_EVERYTHING}`)
}

const letsHaveAnArgument = (theArgument) => {
    // arguments (a.k.a parameters) are also functionally scoped. I wouldn't be able to 
    // reference theArgument outside of letsHaveAnArgument()
    console.log(`The Argument is: ${theArgument}`)
    let theRebuttal = "I know you are, but what am I?"

    // the final scope to discuss is called Block Scope. This usually occurs when you 
    // write a for loop, or an if statement. for example:

    if ("you smell!" === theArgument) {
        // Now we're inside a block scope!
        let blockScopedRebuttal = "yeah, I smell a rat!"

        // this variable is block-scoped, so it cannot be accessed outside the context
        // of this if statement. however, because we are still inside the function
        // letsHaveAnArgument, we can reference (and modify) other variables within that scope
        theRebuttal = blockScopedRebuttal
    }

    console.log(`The rebuttal to "${theArgument}" is: "${theRebuttal}"`)
}

// Because global variables can be referenced inside of function or block scopes, similarly 
// named parameters (or other locally scoped variables) can cause confusing behavior without
// being technically invalid
const avoidThisMess = (THE_ONE_STING) => {
    console.log(`Ladies and Gentlemen, the one and only Sting!: ${THE_ONE_STRING}`)
}
