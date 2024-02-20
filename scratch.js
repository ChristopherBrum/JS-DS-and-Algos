const calculateDaysBetweenDates = (date1, date2) => {
	const diff = date2 - date1;
	return diff / (1000 * 60 * 60 * 24);
};

// find all images without alternative text
// and give them a red border
function processImages() {
	const images = document.querySelectorAll('img');
	images.forEach((image) => {
		if (!image.alt) {
			image.style.border = '5px solid red';
		}
	});
}

// Express erver on port 3000
const express = require('express');

// Return the current line
function getCurrentLine() {
	return new Error().stack.split('\n')[2];
}