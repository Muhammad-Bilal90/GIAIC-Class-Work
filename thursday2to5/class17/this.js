//
let myObj = {
    name: "farman",
    age: 20,
    gender: "male",
    getMyObject: function () {
        console.log(this);
    },
    anotherObj: {
        email: "farman@email.com",
        getObj: function () {
            console.log(this);
        },
    },
};
myObj.anotherObj.getObj();
export {};
