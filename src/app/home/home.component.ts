import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../shared/model/lessons.service";
import {Lesson} from "../shared/model/lesson";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allLessons: Lesson[];
    filtered: Lesson[];

  constructor() {


  }

  ngOnInit() {
   

  }


}
