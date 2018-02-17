function forEach(arr, func){
    for (var i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }    
}

// forEach([3,5,2], function(el){
//     console.log(el);
// });
