var model = {
    currentPerson: {},
    allPersons: [{
            name: 'Lily Butler',
            score: 2,
            photoUrl: 'https://api.randomuser.me/portraits/thumb/men/1.jpg'
        },
        {
            name: 'Waller Perry',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
        },
        {
            name: 'Tammi Donovan',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
        },
        {
            name: 'Doreen Flowers',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
        },
        {
            name: 'Price Pace',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
        },
        {
            name: 'Larson Maldonado',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
        },
        {
            name: 'Berg Bolton',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
        },
        {
            name: 'Mack Lott',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
        },
        {
            name: 'Rosanna Mcleod',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
        },
        {
            name: 'Rosalie Rice',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
        },
        {
            name: 'Virginia Buchanan',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
        },
        {
            name: 'Lorna Stein',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
        },
        {
            name: 'Rosalie Steele',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
        },
        {
            name: 'Wilcox Boyd',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
        },
        {
            name: 'Ollie Rice',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
        }
    ]
};

var control = {
    init: function() {
        listView.init();
        scoresView.init();
    },
    getAllNames: function() {
        return model.allPersons.map(x => x.name);
    },
    getAllScores: function() {
        return model.allPersons.map(x => x.score);
    },
    setCurrentPerson: function(index) {
        Object.assign(model.currentPerson, model.allPersons[index]);
    },
    getCurrentPerson: function() {
        return model.currentPerson;
    },
    viewCurrentProfile: function() {
        profileView.init();
    },
    setCurrentPersonScore: function(value) {
        model.currentPerson.score = value;
    },
    updateModelScore: function(index, value) {
        model.allPersons[index].score = value;
    }

};

var listView = {
    init: function() {
        this.render();
        this.handleClicks();
    },
    render: function() {
        let wrapper = document.getElementsByClassName('wrapper')[0];
        let header = document.createElement('div');
        header.innerHTML = '';
        header.className = "header";
        let names = document.getElementsByClassName('names')[0];
        names.innerHTML = '';



        let namesHeader = document.createElement('div');
        namesHeader.innerHTML = "Names";
        namesHeader.className = "names-header";

        let namesHeaderButtons = document.createElement('div');
        namesHeaderButtons.className = "names-header-buttons";
        let upBtn = document.createElement('span');
        upBtn.className = "names-header-buttons-up";
        upBtn.innerHTML = "&#9650;";

        let downBtn = document.createElement('span');
        downBtn.className = "names-header-buttons-down";
        downBtn.innerHTML = "&#9660;";

        namesHeaderButtons.appendChild(upBtn);
        namesHeaderButtons.appendChild(downBtn);

        namesHeader.appendChild(namesHeaderButtons);
        header.appendChild(namesHeader);
        wrapper.insertBefore(header, names);


        control.getAllNames().forEach((item, index) => {
            let namesListItem = document.createElement('li');
            namesListItem.className = "namesListItem";
            namesListItem.id = index;
            namesListItem.innerHTML = item;

            names.appendChild(namesListItem);
        });
    },
    handleClicks: function() {
        let namesLi = document.getElementsByClassName('namesListItem');
        let upBtn = document.getElementsByClassName('names-header-buttons-up')[0];
        let scoresListItem = document.getElementsByClassName('scoresListItem');
        let downBtn = document.getElementsByClassName('names-header-buttons-down')[0];

        for (item of namesLi) {
            item.addEventListener("click", (event) => {
                control.setCurrentPerson(event.target.id);
                control.viewCurrentProfile();
            });
        }

        let sort = (list, key) => {
            let compare = (a, b) => {
                a = a[key];
                b = b[key];
                var type = (typeof(a) === 'string' ||
                    typeof(b) === 'string') ? 'string' : 'number';
                var result;
                if (type === 'string') result = a.localeCompare(b);
                else result = a - b;
                return result;
            }
            return list.sort(compare);
        }

        let sortedByName = [];
        upBtn.addEventListener('click', () => {
            upBtn.style.color = "#448AFF";
            downBtn.style.color = "#444141";
            sortedByName = sort(model.allPersons, 'name');
            for (item of namesLi) {
                item.innerHTML = sortedByName[item.id].name;
            }
            for (item of scoresListItem) {
                item.innerHTML = sortedByName[item.id].score;
            }
        });


        downBtn.addEventListener('click', () => {
            sortedByName = sort(model.allPersons, 'name');
            sortedByName.reverse();
            upBtn.style.color = "#444141";
            downBtn.style.color = "#448AFF";
            for (item of namesLi) {
                item.innerHTML = sortedByName[item.id].name;
            }
            for (item of scoresListItem) {
                item.innerHTML = sortedByName[item.id].score;
            }
        });
    }
};


var scoresView = {
    init: function() {
        this.render();
        this.handleClicks();
    },
    render: function() {
        let wrapper = document.getElementsByClassName('wrapper')[0];
        let scores = document.getElementsByClassName('scores')[0];
        scores.innerHTML = '';
        let header = document.getElementsByClassName('header')[0];
        // header.innerHTML = '';

        let scoresHeader = document.createElement('div');
        scoresHeader.innerHTML = "Scores";
        scoresHeader.className = "scores-header";

        let scoresHeaderButtons = document.createElement('div');
        scoresHeaderButtons.className = "scores-header-buttons";
        let upBtn = document.createElement('span');
        upBtn.className = "scores-header-buttons-up";
        upBtn.innerHTML = "&#9650;";

        let downBtn = document.createElement('span');
        downBtn.className = "scores-header-buttons-down";
        downBtn.innerHTML = "&#9660;";

        scoresHeaderButtons.appendChild(upBtn);
        scoresHeaderButtons.appendChild(downBtn);

        scoresHeader.appendChild(scoresHeaderButtons);
        header.appendChild(scoresHeader);

        control.getAllScores().forEach((item, index) => {
            let scoresListItem = document.createElement('li');
            let input = document.createElement('input');
            input.className = "score-input";
            input.style.display = "none";
            input.id = index;
            input.type = "text";
            scoresListItem.className = "scoresListItem";
            scoresListItem.id = index;
            scoresListItem.innerHTML = item;

            scores.appendChild(scoresListItem);
            scores.appendChild(input);
        })
    },
    handleClicks: function() {
        let scoresLi = document.getElementsByClassName('scoresListItem');
        let scoresInput = document.getElementsByClassName('score-input');
        let upBtn = document.getElementsByClassName('scores-header-buttons-up')[0];
        let downBtn = document.getElementsByClassName('scores-header-buttons-down')[0];
        let namesListItem = document.getElementsByClassName('namesListItem');

        let sort = (list, key) => {
            let compare = (a, b) => {
                a = a[key];
                b = b[key];
                var type = (typeof(a) === 'string' ||
                    typeof(b) === 'string') ? 'string' : 'number';
                var result;
                if (type === 'string') result = a.localeCompare(b);
                else result = a - b;
                return result;
            }
            return list.sort(compare);
        }

        for (item of scoresLi) {
            item.addEventListener("click", (event) => {
                scoresInput[event.target.id].style.display = "block";
                scoresInput[event.target.id].value = event.target.innerHTML;
                scoresInput[event.target.id].focus();
                control.setCurrentPerson(event.target.id);
                control.viewCurrentProfile();

                $(scoresInput[event.target.id]).focusout(function() {
                    control.setCurrentPersonScore(this.value);
                    scoresLi[event.target.id].innerHTML = this.value;
                    control.updateModelScore(event.target.id, +this.value);
                    control.viewCurrentProfile();
                    this.style.display = "none";
                });

            })
        }

        let sortedByScore = [];
        upBtn.addEventListener('click', () => {
            downBtn.style.color = "#444141";
            upBtn.style.color = "#448AFF";
            sortedByScore = sort(model.allPersons, 'score');

            for (item of namesListItem) {
                item.innerHTML = sortedByScore[item.id].name;
            }
            for (item of scoresLi) {
                item.innerHTML = sortedByScore[item.id].score;
            }
        });

        downBtn.addEventListener('click', () => {
            downBtn.style.color = "#448AFF";
            upBtn.style.color = "#444141";
            sortedByScore = sort(model.allPersons, 'score');
            sortedByScore.reverse();
            for (item of namesListItem) {
                item.innerHTML = sortedByScore[item.id].name;
            }
            for (item of scoresLi) {
                item.innerHTML = sortedByScore[item.id].score;
            }
        });
    }
};


var profileView = {
    init: function() {
        this.render();
    },
    render: function() {
        let profile = document.getElementsByClassName('profile')[0];
        profile.innerHTML = '';
        let text = document.createElement('h3');
        text.innerHTML = control.getCurrentPerson().name;
        let avatar = document.createElement('img');
        avatar.src = control.getCurrentPerson().photoUrl;
        let score = document.createElement("h3");
        score.innerHTML = control.getCurrentPerson().score;

        profile.appendChild(avatar);
        profile.appendChild(text);
        profile.appendChild(score)
    }
};

control.init();