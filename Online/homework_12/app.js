// Your code goes here
let rootNode = document.getElementById("root");

function thumbnails(){
    location.hash = "";
    location.hash = "#";
    var thumbnails = document.createElement("div");
    thumbnails.className = "thumbnails";
    thumbnails.id = "thumbnails";
    // ============================
    var header = document.createElement("h1");
    header.innerHTML = "Most popular tanks";
    thumbnails.appendChild(header);
    // ============================
    var models = document.createElement("div");
    models.className = "models";

    for (var key in tanks){
        var link = document.createElement("a");
        link.setAttribute("href", `#${tanks[key].model}`);
        link.className = "tanks";
        // ============================
        var div = document.createElement("div");
        div.className = "models__item";
        // div.id = tanks[key].model;
        // ============================
        var tooltip = document.createElement("span");
        tooltip.className = "tooltiptext";
        tooltip.innerHTML = "Click to details";
        div.appendChild(tooltip);
        // ============================
        var img = document.createElement("img");
        img.setAttribute("src", `${tanks[key].preview}`);
        div.appendChild(img);
        // ============================

        var title = document.createElement("p");
        title.innerHTML = `<img src="${tanks[key].country_image}">
                           <span>${tanks[key].level}</span>
                           <span id="model__title">${tanks[key].model}</span>`;

        div.appendChild(title);
        // ============================
        link.appendChild(div);
        models.appendChild(link);

    }
    thumbnails.appendChild(models);

    window.onhashchange = function(){
        rootNode.replaceChild(details(location.hash.substring(1)), thumbnails);
    }

    return thumbnails;
}

function details(hash){
    var details = document.createElement("div");
    details.className = "details";
    details.id = hash;
    // ============================
    var obj = 0;
    for (var i in tanks){
        for (var keys in tanks[i]){
          if (tanks[i].model === hash){
            obj = tanks[i];
            break;
          }
        }
    }
    // ============================
    var header = document.createElement("div");
    header.className = "header";
    var tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    var span = document.createElement("span");
    span.className = "tooltiptext";
    span.innerHTML = obj.country;
    tooltip.appendChild(span);
    var logo = document.createElement("img");
    logo.src = obj.country_image;
    tooltip.appendChild(logo);
    header.appendChild(tooltip);

    var headerText = document.createElement("h1");
    headerText.innerHTML = `${obj.model}<span>(level ${obj.level})</span>`;
    header.appendChild(headerText);

    details.appendChild(header);

    // `<img src="${obj.country_image}">${obj.model}<span>(level ${obj.level})</span>`;

    // ============================
    var model = document.createElement("div");
    model.className = "model";
        var model__img = document.createElement("div");
        model__img.className = "model__img";
            var modelItemHeader = document.createElement("h2");
            modelItemHeader.innerHTML = "Preview";
            model__img.appendChild(modelItemHeader);
            var img = document.createElement("img");
            img.setAttribute("src", `${obj.preview}`);
            model__img.appendChild(img);
        model.appendChild(model__img);

        var model__table = document.createElement("div");
        model__table.className = "model__table";
            var tableHeader = document.createElement("h2");
            tableHeader.innerHTML = "Characteristic";
            model__table.appendChild(tableHeader);
            var table = document.createElement("table");
            var tbody = document.createElement("tbody");
            for (var key in obj.details){
                var tr = document.createElement("tr");
                var text = key;
                tr.innerHTML += `<td>${text.split("_").join(" ")}</td><td>${obj.details[key]}</td>`;
                tbody.appendChild(tr);
            }
            table.appendChild(tbody);
            model__table.appendChild(table);
        model.appendChild(model__table);

        var button = document.createElement("a");
        button.className = "back";
        button.setAttribute("href", "#");
        button.innerHTML = "Back to list view";
        model.appendChild(button);

        window.onhashchange = function(){
            rootNode.replaceChild(thumbnails(), details);
        }

    details.appendChild(model);

    return details;
}



rootNode.appendChild(thumbnails());




