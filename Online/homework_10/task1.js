<<<<<<< HEAD
let timeOut = 0;
function debounce(callback, time) {
	return function() {
		clearTimeout(timeOut);
		timeOut = setTimeout(callback, time);
	}
}

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
=======
let timeOut = 0;
function debounce(callback, time) {
	return function() {
		clearTimeout(timeOut);
		timeOut = setTimeout(callback, time);
	}
}

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
>>>>>>> 4da3f062212e6078663a1082f537b35cafcf1d1c
increaseIterator(); // Should print 'Iterator value 1'