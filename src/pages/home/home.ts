import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calendar : any = {

  };
  header:string;
  currentEvents:any[];
  eventSource:any={};
  constructor(public navCtrl: NavController) {
    this.calendar.currentDate = new Date();
    let fewDaysBefore = new Date();;
    fewDaysBefore.setDate(fewDaysBefore.getDate() - 3);
    this.calendar.showEventDetail = false;
    this.eventSource=[
      {
        title:'Путч и казнь императорской семьи',
        startTime:this.calendar.currentDate,
        endTime:this.calendar.currentDate,
        allDay:true,
        url:'/kek',
        location:'Комсомольская 27',
        liked:true,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        pinColor:'#9c28af'
      },{
        title:'Медитация на банан',
        startTime:fewDaysBefore,
        endTime:fewDaysBefore,
        allDay:true,
        url:'/kek',
        location:'Комсомольская 27',
        liked:false,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        pinColor:'#ff9600'
      },{
        title:'Охота на тигров',
        startTime:fewDaysBefore,
        endTime:fewDaysBefore,
        allDay:true,
        url:'/kek',
        location:'Комсомольская 27',
        liked:false,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        pinColor:'#ff9600'
      },{
        title:'Показательные поединки в легком весе палечной борьбы',
        startTime:this.calendar.currentDate,
        endTime:this.calendar.currentDate,
        allDay:true,
        url:'/kek',
        location:'Комсомольская 27',
        liked:true,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        pinColor:'#5e35af'
      },{
        title:'Чемипонат по выпиванию пива на дождевой воде',
        startTime:this.calendar.currentDate,
        endTime:this.calendar.currentDate,
        allDay:true,
        url:'/kek',
        location:'Комсомольская 27',
        liked:true,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        pinColor:'#7db343'
      }
    ]
  }
  onTimeSelected (ev :{selectedTime: Date, events: any[]}){
    this.currentEvents = ev.events
  }
}
