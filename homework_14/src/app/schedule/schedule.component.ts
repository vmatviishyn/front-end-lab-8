import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  TableData:any = [];

  public show:boolean = false;
  public hide:boolean = true;
  public buttonName:string = "Edit";
  topicValue:string = " ";
  dateValue:string = " ";
  lecturerValue:string = " ";

  toggle() {
    this.show = !this.show;
    if (this.show) this.buttonName = "Save"; 
    else this.buttonName = "Edit";
    this.hide = !this.hide;
  }

  addContact(topic_val, date_val, lecturer_val){
    if (topic_val === '' && date_val === '' && lecturer_val === ''){
      alert("Fill all inputs!")
      return;
    }
    else {
      let newItem = {
        id: this.TableData.length + 1,
        topic: topic_val,
        date: date_val,
        lecturer: lecturer_val,
      };
      this.TableData.push(newItem);
    }
  }

  removeContact(contact){
    let index = this.TableData.indexOf(contact);
    this.TableData.splice(index,1);
  }


  constructor() { 
    this.TableData = [
      {id: 1, topic: "OOP", date: "13/03/2018", lecturer: "John Doe"},
      {id: 2, topic: "OOP", date: "13/03/2018", lecturer: "John Doe"},
      {id: 3, topic: "OOP", date: "13/03/2018", lecturer: "John Doe"},
      {id: 4, topic: "OOP", date: "13/03/2018", lecturer: "John Doe"}
    ]
  }

  ngOnInit() {

  }

}
