function Company({ name, owner, maxCompanySize }) {
    this.name = name;
    this.owner = owner;
    this.maxCompanySize = maxCompanySize;
    var _employees = [];
    var _minSalary;
    var _minSalaryIndex;
    var _avarageSalary;
    var _avarageAge;
    var _dateCreated = new Date();
    var _employeeStartDate;
    var _employeeEndDate;
    var _timeInComp;
    var _historyLog = `${this.name} was created in ${_dateCreated.toString()}.\n`;

    function GetMinSalary(arr) {
        _minSalary = arr[0].salary;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i].salary < _minSalary) {
                _minSalary = arr[i].salary;
                _minSalaryIndex = i;
            }
        }
        return _minSalary;
    }

    function Validation(obj) {
        if (!isNaN(obj.name) || !isNaN(obj.primarySkill)) {
            console.log("Please try to add Employee instance");
        } else if (obj.age <= 10 || obj.age >= 75 || isNaN(obj.age)) {
            console.log("Please try to add Employee instance");
        } else if (obj.salary <= 0 || isNaN(obj.salary)) {
            console.log("Please try to add Employee instance");
        } else return true;
    }

    this.addNewEmployee = function(obj) {
        if (Validation(obj)) {
            if (_employees.length >= this.maxCompanySize) {
                GetMinSalary(_employees);
                this.removeEmployee(_minSalaryIndex);
                _employees.push(obj);
                obj.hire(this.name);
                _employeeStartDate = new Date();
                _historyLog += `${obj.name} starts working at ${this.name} in ${_employeeStartDate.toString()}.\n`;
            } else {
                obj.hire(this.name);
                _employeeStartDate = new Date();
                _historyLog += `${obj.name} starts working at ${this.name} in ${_employeeStartDate.toString()}.\n`;
                _employees.push(obj);
            }
        } else {
            console.log("Enter valid value");
        }
    }

    this.removeEmployee = function(index) {
        var obj = _employees[index];
        obj.fire();
        _employeeEndDate = new Date();
        _historyLog += `${obj.name} ends working at ${this.name} in ${_employeeEndDate.toString()}.\n`;
        _employees.splice(index, 1);
    }

    this.getAvarageSalary = function() {
        var summSalary = 0;
        for (var i = 0; i < _employees.length; i++) {
            summSalary += _employees[i].salary;
        }
        _avarageSalary = summSalary / _employees.length;
        return _avarageSalary;
    }

    this.getEmployees = function() {
        return _employees;
    }

    this.getFormattedListOfEmployees = function() {
        var currentDate = new Date();
        _timeInComp = Math.floor(currentDate.getTime() / 1000) - Math.floor(_employeeStartDate.getTime() / 1000);
        for (var i = 0; i < _employees.length; i++) {
            console.log(`${_employees[i].name} - works in ${this.name} ${_timeInComp} seconds`);
        }
    }

    this.getAvarageAge = function() {
        var summAge = 0;
        for (var i = 0; i < _employees.length; i++) {
            summAge += _employees[i].age;
        }
        _avarageAge = summAge / _employees.length;
        return _avarageAge;
    }

    this.getHistory = function() {
        return _historyLog;
    }
}

function Employee({ name, primarySkill, age, salary }) {
    this.name = name;
    this.primarySkill = primarySkill;
    this.age = age;
    this.salary = salary;
    var _timer;
    var _workTimeInSeconds = 0;
    var _salaryChange;
    var _curentCompany;
    var _historyLog = ``;
    var _startWorkDate;
    var _endWorkDate;

    function Validation(value) {
        if (value <= 0) return;
        return value;
    }

    this.run = function() {
        _timer = setInterval(function() { _workTimeInSeconds++ }, 1000);
    }

    this.stop = function() {
        clearInterval(_timer);
    }

    this.getSalary = function() {
        console.log(this.name + " salary is : $" + this.salary)
    }

    this.setSalary = function(value) {
        if (Validation(value)) {
            if (value <= this.salary) {
                _historyLog += `try to change salary from ${this.salary} to ${value}\n`;
                console.log("Cannot set smaller salary than employee has now. \nCurrent salary : $" + this.salary);
            } else {
                _historyLog += `change salary from ${this.salary} to ${value}.\n`;
                this.salary = value;
                console.log(this.name + " salary is set to : $" + this.salary);
            }
        }
    }

    this.getWorkTimeInSeconds = function() {
        return _workTimeInSeconds;
    }

    this.hire = function(companyName) {
        this.run();
        _curentCompany = companyName;
        _startWorkDate = new Date();
        _historyLog += `${this.name} is hired to ${_curentCompany} in ${_startWorkDate.toString()}.\n`;
    }

    this.fire = function() {
        this.stop();
        _endWorkDate = new Date();
        _historyLog += `${this.name} is fired from ${_curentCompany} in in ${_endWorkDate.toString()}.\n`;
        _curentCompany = "";

    }

    this.getHistory = function() {
        return _historyLog;
    }
}