var transformed = [];

function getTransformedArray(arr, func){
    forEach(arr, function(num){
        transformed.push(func(num));
    });
    // console.log(transformed);
}

// getTransformedArray([1, 7, 20], function(num){
//     return num + 1;
// });


