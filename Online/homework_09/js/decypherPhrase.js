var charactersMap = {
    a: 'o', 
    c: 'd',
    t: 'g'
};

var reversed_charactersMap = {};

function swap(obj){
    for(var key in obj){
        reversed_charactersMap[obj[key]] = key;
    }
}

function decypherPhrase(obj, str){
    swap(obj);
    cypherPhrase(reversed_charactersMap, str);
}

// decypherPhrase(charactersMap, "kiggy dog");

