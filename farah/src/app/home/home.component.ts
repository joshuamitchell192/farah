import { Component, OnInit, Input } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material'
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = "farah's website";

  constructor(private matMenuModule: MatMenuModule) { }

  ngOnInit() {
  }

}
