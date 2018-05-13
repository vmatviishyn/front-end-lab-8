var myApp = angular.module('myApp', ["studentsList"]);

myApp.controller('DemoController', ['studentsList', function DemoController(studentsList) {
    this.studentsList = studentsList;
    this.categories = [];
    this.studentsList.forEach(item=>{
      item.categories.map(i=>{
        this.categories.push(i);
      })
    })
    this.uniq = this.categories.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

    this.showInput = false;
    this.buttonName = "Edit"

    this.toggle = function() {
      this.showInput = !this.showInput;
      if(this.showInput)  
        this.buttonName = "Save";
      else
        this.buttonName = "Edit";
    }

    // FORM //
    this.showForm = false;
    this.post = {};
    this.cat = "";
    this.photoname = "";
    this.photo = "";
    this.submitForm = function() {
      this.arrayCat = this.cat.split(" ");
      this.post.categories = this.arrayCat;
      if (this.photoname.length == 0) this.photoname = "krakow.jpg";
      this.photo = "../assets/" + this.photoname;
      this.post.photo = this.photo;
      this.studentsList.push(this.post)

      this.arrayCat = [];
      this.post = {};
      this.cat = "";
      this.photoname ="";
      this.photo="";
      this.showForm = false;
  };
}]);


