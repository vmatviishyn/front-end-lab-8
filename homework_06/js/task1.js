var http = {
    get: function(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    },
    post: function(url) {
        var text = tableToJSON(document.getElementById('table'));
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(text);
        });
    }
}

function tableToJSON(table) {
    var obj = {};
    var row, rows = table.rows;
    for (var i = 0, iLen = rows.length; i < iLen; i++) {
        row = rows[i];
        obj[row.cells[0].textContent] = row.cells[1].textContent
    }
    return JSON.stringify(obj);
}