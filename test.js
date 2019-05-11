const arr = [
    {
        text: 'a',
        age: 1
    },
    {
        text: 'b',
        age: 3
    },
    {
        text: 'c',
        age: 88
    }
]

// forEach
arr.forEach((ele) => {
    console.log(ele.text);
})

// map
const newArr = arr.map((ele) => {
    return ele.age;
})

console.log(newArr);

// filter
const arr1 = arr.filter((ele) => {
    return ele.age > 9;
})

console.log(arr1);


// reduce
const arrSum = arr.reduce((total, ele) => {
    return total += ele.age;
}, 0);

console.log(arrSum);



// prototype
class obj {
    constructor(x){
        this.value = x;
    }
}
console.log(Object.getPrototypeOf(obj));
