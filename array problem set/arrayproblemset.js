//printReverse()

function reverse(x){
	for (var i = x.length-1; i >= 0; i --){
		console.log(x[i]); 
	}
}

//alternatively this will reverse the array itself (which is not the goal of this exercise but still)

function heya() {
    console.log(toBe.reverse());
}

//isUniform()

function isUniform(x) {
	for (var i = 0; i < x.length; i++) //can also set i = 1 since we dont need to compare to itself
		if (x[0] !== x[i]) {
			return false;
		}
	return true; //we put this outside of the for statement because we want to loop all the way through and if we put this in there it would return true after only 1 loop 
}

//sumArray()

function sumArray(x) {
	var sum = 0;
	for (var i = 0; i < x.length; i++) {
		sum += x[i];
	}
	return sum;
}

//sumArray() written as a forEach

function newSumArray(y) {
	var total = 0
	y.forEach(function(element){
		total += element;
	});
	return total;
}

//max()

function max(x) {
	var maximum = x[0];
	for (var i = 0; i < x.length; i++) { //can also set i = 1 since we dont need to compare to itself
		if (x[i] > maximum) {
			maximum = x[i]
		}
	}
	return maximum; //again we put this on the outside so when they're done duking it out inside of the for loop it will return without stopping the loop
}
