var charactersMap = {
    a: 'o', 
    c: 'd',
    t: 'g'
};

filtered = [];
transformed = [];

var newstr = "";
var arr = [];

function cypherPhrase(obj, str){
    arr = str.split('');

    getTransformedArray(arr, function(item){
        for (var prop in obj) {
            if(item===prop){
                item=obj[prop];
            }
        } 
        return item;
    });

    var newstr = transformed.join('');  
    console.log(newstr);
}   

// cypherPhrase(charactersMap, "kitty cat");
