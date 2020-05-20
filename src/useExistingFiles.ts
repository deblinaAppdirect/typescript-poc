import samples from "../existing_node_files/sampleFile.js";

// Adding VOID type to function
function testFunction(): void {
    samples.testFunction();
}

// Adding NEVER type to function
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

// Funtion returning type never has unreachable end point.
// function infiniteLoop(): never {
//     // tslint:disable-next-line: no-empty
//     while (true) {
//     }
// }

// Adding type to arrow function
const testArrowFunction = (): any => { console.log("This is an arrow function."); };

// Generic type
function genericArrayNormalFunc<T>(arg: T): T {
    console.log(`${arg} is of generic type.`);
    return;
}
const genericArrayArrowFunc = <T>(arg: T[]): T[] => {
    console.log(`${arg.length} is of generic type.`);
    return;
};

// Interfaces
// tslint:disable-next-line: interface-name
interface RectangleConfig {
    length: number;
    width?: number;
    readonly height?: number;                       // once object is created, the value will not change
                                                    // Difference between readonly vs const
    [propName: string]: any;                        // sure when object can have some other properties as well
}

/**
 * Type compatibility: compilor compares the properties of object with the
 * interface properties
 */
function createFigure(config: RectangleConfig): { area: number } {
    let areaValue = 0;
    // config.height = 20;

    if (config.width) { areaValue = config.length * config.width; } else { areaValue = config.length * config.length; }

    return { area: areaValue};
}

// Generic interface
// tslint:disable-next-line: interface-name
interface GenericInterface<T> {
    // tslint:disable-next-line: callable-types
    (arg: T): T;                        // This is a non generic function signature
}

// interface GenericInterface {
//     <T>(arg: T): T;                        // This is a generic function signature
// }

function genericInterface<T>(arg: T): T {
    return arg;
}

function implementingGenericInterface(): void {
    const temp: GenericInterface<string> = genericInterface;
    // const x: GenericInterface<number> = genericInterface;
    // const temp: GenericInterface = genericInterface;
    console.log(" the value of temp is  >>>>>  ", temp("abc"));
}

// Adding type to anonymous function
/**
 * Type inference: compilor understands the type if any type annotation is missing
 * in any of the side of assign operator
 */
// tslint:disable-next-line: only-arrow-functions
const myAdd: (x, y) => number = function(x, y) { return x + y; };

// Rule set to follow alphabetical order.
export default {
    createFigure,
    fail,
    genericArrayArrowFunc,
    genericArrayNormalFunc,
    implementingGenericInterface,
    myAdd,
    testArrowFunction,
    testFunction,
};
