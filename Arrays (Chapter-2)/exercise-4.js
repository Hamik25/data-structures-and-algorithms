// Exercise
// Create an object that stores individual letters in an array and has a function for
// displaying the letters as a single word.

// Solution
var letters = {
	store: ["W", "o", "r", "l", "d"],
	getWord: function() {
		return this.store.reduce(function(accumulate, current) {
			return accumulate + current;
		});
	}
};

console.log(letters.getWord());