const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

output: 
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined


Solution 1 : With the help of IIFE

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}


output: 
The index of this number is: 0
The index of this number is: 1
The index of this number is: 2
The index of this number is: 3  


Solution 2: ES6 let keyword

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}


output: 
The index of this number is: 0
The index of this number is: 1
The index of this number is: 2
The index of this number is: 3  