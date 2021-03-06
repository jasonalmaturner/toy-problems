// Work on this toy problem until 9:20ish. We'll review a couple of solutions until 9:30,
// and then work on the project review until 10:00

// “Write a function called finder that accepts two parameters,
// the first one is a string and the second is an array.
// Have your function return true if the string is found in the array and false if it is not”
// var nums = [“hello”, “javascript”, “awesome”];
// finder(“javascript”, nums); //true
// finder(“lame”, nums); //false



var pets = ['dog', 'cat', 'red breasted merganser', 'duck billed platypus', 'emu', 'hedgehog'];

var finder = function (string, array) {
	for(var i = 0; i < array.length; i++) {
		if(array[i] === string) {
			return true;
		}
	}
	return false;
}

var finder2 = function(string, array) {
	if(array.indexOf(string) !== -1) {
		return true;
	} else {
		return false;
	}
}

var first = ['Tyler', 'Ean', 'Cahlan'];
var last = ['McGinnis', 'Platter', 'Sharp'];

function combinator(firstName, lastName) {
	var newArray = [];
	var tempArray = [];
	for(var i = 0; i < firstName.length; i++) {
		tempArray.push(first[i], last[i]);
		newArray.push(tempArray.join(' '));
		tempArray = [];
	}
	return newArray;
}

function combinator2(first, last) {
	var newArray = [];
	for(var i = 0; i < first.length; i++) {
		newArray.push(first[i] + ' ' + last[i]);
	}
	return newArray;
}


var sum = function(array, cb) {
	var total = 0;
	for(var i = 0; i < array.length; i++) {
		total += array[i];
	};
	cb(total);
}
sum([1,4,3,5,2,8], function(total) {
	console.log('The total sum of the array is ' + total);
});

function reverse (string) {
	var newString = "";
	for(var i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
	return newString;
}

function factorial1 (n) {
	for(var i = n; i > 0; i--){
		console.log(i);
	}
}

function factorial2 (n) {
	var answer = n;
	for(var i = n - 1; i > 0; i--){
		answer = answer + ' * ' + i;
	}
	return answer;
};

function factorial3 (n) {
	var answer = n;
	for(var i = n - 1; i > 0; i--){
		answer = answer * i;
	}
	return answer;
}

var simpleSymbols = function(str) {
	var array = str.split('');
	for(var i < array.length; i++) {https://github.com/jasonalmaturner/toy-problems

	}
}

// Given an arbitrary input string, return the first non-repeated character in the string. For example:
// firstNonRepeatedCharacter(‘ABA’); // => ‘B’
// firstNonRepeatedCharacter(‘AABCABD’); // => ‘C’

var firstNon = function(str) {
	var hash = {}
	for(var i = 0; i < str.length; i++) {
		hash[str[i]] = 0;
		console.log(hash);
	}
}

var firstNon = function(str) {
	var array = [];
	for(var i = 0; i < str.length; i++) {
		if(array.indexOf(str[i]) === -1) {
			array.push(str[i]);
		};
	};
}

var firstNon = function(str) {
	var array = [];
	for(var i = 0; i < str.length; i++){
		array.push(0);
	}
	for(var i = 0; i < str.length; i++){
		if()
	}
}

var firstNon = function(str) {
	for(var i = 0; i < str.length; i++) {
		if(str.indexOf(str[i]) !== i) {
			return str[i];
		}
	}
}

var diff = function(num1, num2){
	var newArray = [];
	for(var i = num1; i < num2 + 1; i++){
		newArray.push(i);
	};
	return newArray;
}

var diff = function(num1, num2){
	for(var i = num1; i < num2 + 1; i++) {
		console.log(i)
	}
}

// Write a function called ABCheck that takes a string parameter and return the string true
// if the characters a and b are separated by exactly 3 places anywhere in the string at least once
// (ie. "lane borrowed" would result in true because there is exactly three characters between
 // a and b). Otherwise return the string false.

function ABCheck(string){
	var newArray = string.toLowerCase().split('');
	console.log(newArray);
	var flag = false;
	for(var i = 0; i < newArray.length; i++) {
		if(newArray[i] === 'a' && newArray[i + 4] === 'b') {
			flag = true;
		} else if (newArray[i] === 'a' && newArray[i - 4] === 'b') {
			flag = true;
		} else if (newArray[i] === 'b' && newArray[i + 4] === 'a') {
			flag = true;
		} else if (newArray[i] === 'b' && newArray[i - 4] === 'a') {
			flag = true;
		}
	}
	return flag;
}



// Write a function that generates an array of integers of
// the Fibonacci sequence, up to i = 100. The Fibonacci sequence
// is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you
// add the previous two numbers up. The first two numbers in
// the sequence are 0 and 1. Write a function to check if a given number
// is in the Fibonacci sequence, return "yes" if it is,
// if not return the string "no."

function fib(num){
	var fbnArray = [0,1];
	for(var i = 0; i < 99; i++){
		fbnArray.push(fbnArray[fbnArray.length - 1] + fbnArray[fbnArray.length - 2]);
	};
	console.log(fbnArray)
	if(fbnArray.indexOf(num) === -1){
		return false;
	}
	return true;
}

function onlyEven (arr) {
	var hash = {};
	for(var i = 0; i < arr.length; i++){
		if(hash[arr[i]]){
			hash[arr[i]]++
		} else {
			hash[arr[i]] = 1;
		}
	}
	for(var key in hash){
		if(hash[key] % 2 === 0){
			return key;
		}
	}
	return null;
}

var nums = [1,6,2,4,4,5,6,8,9,6];


var nums2 = [1,8,6,6,8,7,6,7];
var nums3 = [1,2,3,4,5];

function deleter (array){
var hash = {};
  for(var i = 0; i < array.length; i++){
    if(hash[array[i]]){
      array.splice(i,1);
    } else {
      hash[array[i]] = true;
    };
  };
};

function fibRec(n){
	var fbnArray = [0,1];
	for(var i = 0; i < n; i++){
		fbnArray.push(fbnArray[fbnArray.length - 1] + fbnArray[fbnArray.length - 2]);
	};
	return fbnArray[n - 1];
};

function fibRec2(n){
	debugger;
	if(n === 1){
		return 0;
	} else if(n === 2){
		return 1;
	} else {
		return fibRec2(n - 1) + fibRec2(n - 2);
	};
};

function replace(string, letter1, letter2) {
	var array = string.toLowerCase().split('');
	for(var i = 0; i < array.length; i++) {
		if(array[i] === letter1){
			array[i] = letter2;
		}
	}
	return array.join('')
}

// function palindrome (str) {
// 	var newStr = str.toLowerCase().split(' ').join('')
// 	var firstHalf = newStr.split('').splice(newStr.length/2);
// 	newStr.split('').splice(newStr.length/2);
// 	firstHalf.reverse()
// 	firstHalf.join('')
// 	console.log(newStr
// )	console.log(firstHalf)

// 	if(firstHalf === str) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
