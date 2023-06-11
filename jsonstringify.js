// json stringify function initialization
var jsonStringify = function (object) {
    if (object === null) {
        return null;
    }
    if (typeof object === 'string') {
        return "\"" + object + "\""
    }
    if (typeof object !== 'object') {
        return object;
    }
    if (Array.isArray(object)) {
        let res = ""
        res += '['
        for (let i = 0; i < object.length; i++) {
            if (i === object.length - 1) {
                res += jsonStringify(object[i]) + ''
            } else {
                res += jsonStringify(object[i]) + ','
            }
        }
        res += ']'
        return res;
    }
    if (typeof object === 'object') {
        let re = ''
        re += '{';
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                re += "\"" + key + "\":"
                re += jsonStringify(object[key]) + ','
            }
        }
        if (re.endsWith(',')) {
            re = re.substring(0, re.length - 1);
        }
        re += '}';
        return re;
    }

};

//objects 
let obj = { "y": 1, "x": 2 };
let obj2 = { "a": "str", "b": -12, "c": true, "d": null };
let obj3 = { "key": { "a": 1, "b": [{}, null, "Hello"] } };
let obj4 = true;
let obj5 = [1, 2, 3, 'shdf']
let obj6 = [1, 2, 3, 'shdf', [5, 6, "hi", [5, 6, "hi"]]]
let obj7 = [1, 2, 3, null, [5, 6, "hi", [5, 6, "hi"]]]
let obj8 = [{}, null, "Hello"];
//function call
console.log(jsonStringify(obj));
console.log(jsonStringify(obj2));
console.log(jsonStringify(obj3));
console.log(jsonStringify(obj4));
console.log(jsonStringify(obj5));
console.log(jsonStringify(obj6));
console.log(jsonStringify(obj7));
console.log(jsonStringify(obj8));




// console.log(typeof jsonStringify(obj));