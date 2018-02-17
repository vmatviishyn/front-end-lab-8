var filtered = [];

function getFilteredArray(arr, func){ 
    forEach(arr, function(num){
        if (func(num))
            filtered.push(num);
    });
    // console.log(filtered);
}

// getFilteredArray([1, 7, 20], function(num){
//     return num > 3;
// });
