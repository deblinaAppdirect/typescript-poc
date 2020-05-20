import bodyParser from "body-parser";
import express from "express";
import test from "./useExistingFiles";

const app = express();
const port = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    /**
     * test of existing javascript files
     */
    test.myAdd(1, 3);

    // const figure = test.createFigure({length: 10, height: 5, color: "123"});
    // console.log("Figure >>>>>>>> ", figure);

    test.fail();
    // test.implementingGenericInterface();
    // test.testArrowFunction();
    // test.testFunction();

    // test.genericArrayNormalFunc<number>(5);
    // test.genericArrayArrowFunc<string>(["abc", "xyz", "123"]);

    let example: any;
    example =   [1, 2, 3];
    res.send("\b\b\b\bThis is a valid javascript file too!!");
});

app.post("/useoftypescript", (req, res) => {
    // tslint:disable-next-line: interface-name
    interface Person {
        firstName: void;
        // middleName: string;
        lastName: string;
    }

    class Student {
        public fullName: string;
        constructor(
            public firstName: string,
            public middleInitial: string,
            public lastName: string,
        ) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }

    function greeter(person) {
        res.send("Hello, " + person.firstName + " " + person.lastName);
    }

    const user = new Student(req.body.firstName, req.body.middleName, req.body.lastName);
    greeter(user);

});
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
