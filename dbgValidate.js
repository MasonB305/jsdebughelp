/*
This is a script that can be used to find undefined properties in vanilla JavaScript.
examine the following snippet:

let obj = {}
console.log( + obj.a.c);

the error message provided is often some mumbo jumbo about how c is undefined, even though a is also not a property.
This can slow the debugging process, and can inhibit the development of even simple projects.

This function is my simple approach to overcoming this. You simply feed it an object and the 'path' that you wish
to reference. The function will simply verify that an object exist at each level of the path. If there is a missing object,
the code will give you a descriptive log message
*/

const dbgValidate = (obj, pth) => {
    let cpy = JSON.parse(JSON.stringify(obj)); //so the object is not modified
    let valid = true;
    for (let i = 1; i < pth.length; i += 1) {
        if (!Object.hasOwn(cpy, pth[i])) {
            console.log('the element at index ' + (i + 1) + ' in pth is not defined (' + pth[i] + ')');
            valid = false;
            break;
        }
        //go to next element in path
        cpy = cpy[pth[i]];
    }
    if (valid) {
        console.log(pth.join('.') + ' exist');
    }
};

module.exports = dbgValidate;