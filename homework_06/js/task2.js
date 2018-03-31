var inputText = document.getElementById("form-input");
var trackBtn = document.getElementById("form-get");
var validateBtn = document.getElementById("form-post");
var text = document.getElementById("response-get");
var responseDiv = document.getElementById("response");
var animation = document.getElementById("animation");
var post_text = document.getElementById("response-post");
var table = document.createElement("table");
table.id = "table";

trackBtn.onclick = function() {
    animation.style.display = "block";
    table.innerHTML = " ";
    var tbody = document.createElement("tbody");
    var ip = inputText.value;
    var url = `https://ipapi.co/${ip}/json/`;
    http.get(url).then(val => {
        animation.style.display = "none";
        responseDiv.style.display = "block";
        validateBtn.style.display = "block";
        var obj = JSON.parse(val);
        for (var key in obj) {
            var tr = document.createElement("tr");
            tr.innerHTML += `<td>${key.split("_").join(" ")}</td><td>${obj[key]}</td>`;
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        text.appendChild(table);
    });
}

validateBtn.onclick = function() {
    animation.style.display = "block";
    http.post('https://shrouded-garden-94580.herokuapp.com/').then(val => {
        animation.style.display = "none";
        post_text.innerHTML = val;
    });
}