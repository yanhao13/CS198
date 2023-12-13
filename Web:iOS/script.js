console.log('hello, world!', 1, 2, 3);

let lst = ['go', 'bears', ':)'];
console.log(lst[1]); //output: bears
lst.push(1);
console.log(lst); //output: [“go”, “bears”, “:)”, 1]
lst.pop();
console.log(lst); //output: [“go”, “bears”, “:)”]
lst.sort();
console.log(lst); //output: [“:)”, “bears”, “go”]
console.log(lst.includes('hello')); //output: false

let obj = {a: 'go', b: 'bears'}; //here, a and b are keys, 'go' and 'bears' are values
console.log(obj.a) //output: go

function magic(num) {
    return num * 2 + 10;
    }
console.log(magic(5)); // 20
console.log(magic(28)); // 66

document.createElement('div'); //note: this returns an Element object in JS, but doesn’t attach it to the DOM yet
let titleElement = document.getElementsByName("h3");
titleElement.textContent = 'Hello, Java Script! We have updated this!'
let newDivElement = document.createElement("div");
newDivElement.textContent = 'hello java script'
let boxElement = document.getElementsByClassName("box1");
for (let i = 0; i < boxElement.length; i++) {
  boxElement[i].appendChild(newDivElement.cloneNode(true));
}
let boxElements = document.getElementsByClassName("box2"); 
