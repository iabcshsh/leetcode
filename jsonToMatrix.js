var jsonToMatrix = function (arr) {
  let matrix = [];
  var keyset = new Set();
  function getkeys(arr, path) {
    for (k in arr) {
      if (typeof arr[k] === "object" && arr[k] != null) {
        newpath = path ? path + "." + k : k;
        getkeys(arr[k], newpath);
      } else {
        if (k !== undefined && path !== undefined) {
          keyset.add(path + "." + k);
        } else if (k !== undefined) {
          keyset.add(k);
        }
      }
    }
  }
  for (k in arr) {
    getkeys(arr[k]);
  }
  let sortedkey = [...keyset].sort();
  let values = [];
  function getvalues(arr, k) {
    for (sk in sortedkey) {
      let current = sortedkey[sk];
      let keyarr = current.split(".");
      let vals = arr;
      for (let i = 0; i < keyarr.length; i++) {
        if (vals !== undefined && vals !== null) {
          vals = vals[keyarr[i]];
        } else {
          vals = undefined; // Set vals to undefined if out-of-bounds
          break;
        }
      }
      if (vals === null) {
        values[k].push(null);
      } else {
        values[k].push(
          typeof vals === "number" ||
            typeof vals === "string" ||
            typeof vals === "boolean"
            ? vals
            : ""
        );
      }
    }
  }

  for (k in arr) {
    values[k] = [];
    getvalues(arr[k], k);
  }
  matrix = [sortedkey, ...values];
  return matrix;
};
let arr1 = [
  { b: 1, a: 2 },
  { b: 3, a: 4 },
];
let arr2 = [{ a: 1, b: 2 }, { c: 3, d: 4 }, {}];
let arr3 = [{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }];
let arr4 = [{}, {}, {}];
let arr = [[{ a: null }], [{ b: true }], [{ c: "x" }]];
let arr5 = [[[[1]]], [[[2]]], [[[3]]]];
let arr6 = [[[[1]]], [[2]], [3]];
let arr7 = [
  { a: true, b: false, c: null },
  { a: 1, b: "Hello", c: "" },
];
let arr8 = [
  {
    _id: "64265e18f4596ed5b53673c1",
    index: 0,
    guid: "bf29f675-5742-43a5-b667-d7158aa9cca4",
    isActive: true,
    balance: "$1,216.03",
    picture: "http://placehold.it/32x32",
    age: 34,
    eyeColor: null,
    name: "Roberts West",
    gender: "male",
    company: "GEEKY",
    email: "robertswest@geeky.com",
    phone: "+1 (918) 600-2564",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: "2022-12-24T06:42:37 +06:00",
    latitude: 82.029314,
    longitude: 88.713256,
    tags: ["et", true, "velit", "velit", "ullamco", "qui", "nostrud"],
    friends: [
      { id: 0, name: "Manuela Hart" },
      { id: 1, name: "Janice Sykes" },
      { id: 2, name: "Beasley Bonner" },
    ],
    greeting: "Hello, Roberts West! You have 6 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "0.0728693319274516",
    index: 0,
    guid: "bf29f675-5742-43a5-b667-d7158aa9cca4",
    isActive: true,
    balance: "$1,216.03",
    picture: { x: true },
    age: 34,
    eyeColor: null,
    name: "Roberts West",
    gender: "male",
    company: "GEEKY",
    email: "robertswest@geeky.com",
    phone: "+1 (918) 600-2564",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: "2022-12-24T06:42:37 +06:00",
    latitude: 82.029314,
    longitude: 88.713256,
    tags: ["et", true, "velit", "velit", [1], "qui", { x: true }],
    friends: [
      { id: 0, name: { x: true } },
      { id: 1, name: "Janice Sykes" },
      { id: 2, name: "0.16042429817957493" },
    ],
    greeting: "Hello, Roberts West! You have 6 unread messages.",
    favoriteFruit: "0.14501613175204642",
  },
  {
    _id: "0.0728693319274516",
    index: 0,
    guid: "bf29f675-5742-43a5-b667-d7158aa9cca4",
    isActive: true,
    balance: { x: true },
    picture: { x: { x: true } },
    age: 34,
    eyeColor: null,
    name: "Roberts West",
    gender: "male",
    company: "GEEKY",
    email: "0.3309422623749263",
    phone: "+1 (918) 600-2564",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: "0.13851459125712262",
    latitude: 82.029314,
    longitude: 88.713256,
    tags: ["et", true, "velit", "velit", [1], { x: true }, { x: true }],
    friends: [
      { id: 0, name: { x: { x: true } } },
      { id: 1, name: "Janice Sykes" },
      { id: 2, name: "0.16042429817957493" },
    ],
    greeting: "Hello, Roberts West! You have 6 unread messages.",
    favoriteFruit: "0.14501613175204642",
  },
  {
    _id: "0.0728693319274516",
    index: 0,
    guid: "bf29f675-5742-43a5-b667-d7158aa9cca4",
    isActive: true,
    balance: { x: true },
    picture: { x: { x: { x: true } } },
    age: 34,
    eyeColor: null,
    name: "Roberts West",
    gender: "male",
    company: "GEEKY",
    email: "0.3309422623749263",
    phone: "+1 (918) 600-2564",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: "0.13851459125712262",
    latitude: 82.029314,
    longitude: 88.713256,
    tags: [
      "et",
      true,
      "0.05257375444042278",
      "velit",
      ["0.11232390443394835"],
      { x: [1] },
      { x: true },
    ],
    friends: [
      { id: 0, name: { x: { x: true } } },
      { id: 1, name: "Janice Sykes" },
      { id: { x: true }, name: "0.16042429817957493" },
    ],
    greeting: { x: true },
    favoriteFruit: "0.14501613175204642",
  },
  {
    _id: "0.0728693319274516",
    index: 0,
    guid: "bf29f675-5742-43a5-b667-d7158aa9cca4",
    isActive: true,
    balance: { x: true },
    picture: { x: { x: { x: true } } },
    age: 34,
    eyeColor: "0.06649716622497093",
    name: "Roberts West",
    gender: "male",
    company: "GEEKY",
    email: "0.3309422623749263",
    phone: "0.8836718715333238",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: "0.13851459125712262",
    latitude: 82.029314,
    longitude: [1],
    tags: [
      "et",
      { x: true },
      "0.05257375444042278",
      "velit",
      ["0.11232390443394835"],
      { x: [1] },
      { x: true },
    ],
    friends: [
      { id: "0.32667837388350995", name: { x: { x: true } } },
      { id: 1, name: { x: true } },
      { id: { x: true }, name: "0.16042429817957493" },
    ],
    greeting: { x: { x: true } },
    favoriteFruit: "0.14501613175204642",
  },
  {
    _id: "0.0728693319274516",
    index: 0,
    guid: "0.7583957237124486",
    isActive: { x: true },
    balance: { x: true },
    picture: { x: { x: { x: true } } },
    age: 34,
    eyeColor: "0.06649716622497093",
    name: "Roberts West",
    gender: "0.14281123675053964",
    company: "GEEKY",
    email: "0.3309422623749263",
    phone: "0.8836718715333238",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: "0.13851459125712262",
    latitude: 82.029314,
    longitude: [{ x: true }],
    tags: [
      "et",
      { x: true },
      "0.05257375444042278",
      "velit",
      ["0.11232390443394835"],
      { x: [{ x: true }] },
      { x: [1] },
    ],
    friends: [
      { id: "0.32667837388350995", name: { x: { x: true } } },
      { id: 1, name: { x: true } },
      { id: { x: true }, name: "0.16042429817957493" },
    ],
    greeting: { x: { x: true } },
    favoriteFruit: "0.14501613175204642",
  },
  {
    _id: "0.0728693319274516",
    index: 0,
    guid: "0.7583957237124486",
    isActive: { x: true },
    balance: { x: true },
    picture: { x: { x: { x: true } } },
    age: 34,
    eyeColor: "0.06649716622497093",
    name: "Roberts West",
    gender: "0.14281123675053964",
    company: "GEEKY",
    email: "0.3309422623749263",
    phone: "0.8836718715333238",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: "0.13851459125712262",
    latitude: 82.029314,
    longitude: [{ x: "0.0964325368871446" }],
    tags: [
      "0.7598244192641979",
      { x: true },
      "0.05257375444042278",
      "velit",
      ["0.11232390443394835"],
      { x: [{ x: true }] },
      { x: [1] },
    ],
    friends: [
      { id: "0.5874553769807973", name: { x: { x: { x: true } } } },
      { id: 1, name: { x: true } },
      { id: { x: "0.24065403249704986" }, name: "0.16042429817957493" },
    ],
    greeting: { x: { x: true } },
    favoriteFruit: "0.14501613175204642",
  },
  {
    _id: "0.26010278482396343",
    index: 0,
    guid: "0.7583957237124486",
    isActive: { x: "0.05239055239447987" },
    balance: { x: true },
    picture: { x: { x: { x: true } } },
    age: 34,
    eyeColor: "0.15987950478747592",
    name: "Roberts West",
    gender: "0.14281123675053964",
    company: "GEEKY",
    email: "0.3309422623749263",
    phone: "0.8836718715333238",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: [1],
    latitude: 82.029314,
    longitude: [{ x: "0.0964325368871446" }],
    tags: [
      "0.45280704371287195",
      { x: true },
      "0.05257375444042278",
      "velit",
      ["0.11232390443394835"],
      { x: [{ x: "0.3406935749521298" }] },
      { x: ["0.5564914324490853"] },
    ],
    friends: [
      { id: "0.47403864217462943", name: { x: { x: { x: true } } } },
      { id: 1, name: { x: true } },
      { id: { x: "0.24065403249704986" }, name: "0.16042429817957493" },
    ],
    greeting: { x: { x: [1] } },
    favoriteFruit: "0.14501613175204642",
  },
  {
    _id: "0.26010278482396343",
    index: 0,
    guid: "0.7583957237124486",
    isActive: { x: "0.05239055239447987" },
    balance: { x: "0.4828311027445322" },
    picture: { x: { x: { x: true } } },
    age: 34,
    eyeColor: "0.15987950478747592",
    name: "Roberts West",
    gender: "0.14281123675053964",
    company: "GEEKY",
    email: "0.3309422623749263",
    phone: "0.8836718715333238",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: [1],
    latitude: 82.029314,
    longitude: [{ x: "0.0964325368871446" }],
    tags: [
      "0.45280704371287195",
      { x: true },
      "0.05257375444042278",
      "velit",
      ["0.6203172696749151"],
      { x: [{ x: "0.3406935749521298" }] },
      { x: ["0.014613800835636903"] },
    ],
    friends: [
      { id: "0.47403864217462943", name: { x: { x: { x: true } } } },
      { id: 1, name: { x: true } },
      { id: { x: "0.24065403249704986" }, name: "0.16042429817957493" },
    ],
    greeting: { x: { x: [1] } },
    favoriteFruit: "0.14501613175204642",
  },
  {
    _id: "0.26010278482396343",
    index: 0,
    guid: "0.193807129007179",
    isActive: { x: "0.05239055239447987" },
    balance: { x: "0.4828311027445322" },
    picture: { x: { x: { x: true } } },
    age: 34,
    eyeColor: "0.15987950478747592",
    name: [1],
    gender: "0.14281123675053964",
    company: "GEEKY",
    email: "0.3309422623749263",
    phone: "0.8836718715333238",
    address: "584 Logan Street, Whitewater, Alaska, 1691",
    registered: [1],
    latitude: 82.029314,
    longitude: [{ x: "0.0964325368871446" }],
    tags: [
      "0.4530685346478853",
      { x: true },
      "0.05257375444042278",
      "velit",
      ["0.6203172696749151"],
      { x: [{ x: { x: true } }] },
      { x: ["0.014613800835636903"] },
    ],
    friends: [
      { id: "0.47403864217462943", name: { x: { x: { x: true } } } },
      { id: 1, name: { x: true } },
      { id: { x: "0.24065403249704986" }, name: "0.16042429817957493" },
    ],
    greeting: { x: { x: [1] } },
    favoriteFruit: "0.14501613175204642",
  },
];
// console.log(jsonToMatrix(arr1));
// console.log(jsonToMatrix(arr2));
// console.log(jsonToMatrix(arr3));
// console.log(jsonToMatrix(arr4));
// console.log(jsonToMatrix(arr5));
// console.log(jsonToMatrix(arr6));
// console.log(jsonToMatrix(arr))
// console.log(jsonToMatrix(arr7))
let rema=jsonToMatrix(arr8);
const numCols = rema.reduce((maxCols, row) => Math.max(maxCols, row.length), 0); // Number of columns

const numRowsPerColumn = Array(numCols).fill(0); // Array to store the number of rows for each column

rema.forEach(row => {
  row.forEach((value, colIndex) => {
    if (colIndex < numCols) {
      numRowsPerColumn[colIndex]++;
    }
  });
});
console.log(rema)
console.log("Number of rows per column:", numRowsPerColumn);
console.log(arr8.length)
console.log(rema[1].length);
console.log(rema[2].length)
console.log(rema[3].length)
console.log(rema[4].length)
console.log(rema[5].length)
console.log(rema[6].length)
console.log(rema[7].length)
console.log(rema[8].length)
console.log(rema[9].length)
console.log(rema[10].length)