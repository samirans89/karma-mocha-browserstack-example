'use strict';

window.calculator = window.calculator || {};

(function() {
	var getIntById = function(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

	var calculate = function() {
		var x = getIntById('x');
		var y = getIntById('y');
		var sum = x + y;
		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
		console.log("*****************************************************************")
		console.log("Sum of x = " + x + " and y = " + y + " is " + sum)
    console.log("*****************************************************************")
	};

	window.calculator.init = function() {
		document.getElementById('add').addEventListener('click', calculate);
	};
})();
