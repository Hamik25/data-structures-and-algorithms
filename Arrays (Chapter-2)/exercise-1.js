// Exercise
// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

// Solution
var grades = {
	gradesStore: [],
	add: function(newGrade) {
		this.gradesStore.push(newGrade);
		return this;
	},
	average: function() {
		debugger;
		var n = this.gradesStore.length;
		var sum = this.gradesStore.reduce(function(accumulate, current) {
			return accumulate + current;
		});

		var total = sum / n;
		return total.toFixed(2);
	}
};

console.log(grades.add(87).add(93).add(99).add(77).add(91).average());