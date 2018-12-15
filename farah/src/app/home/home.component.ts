import { Component, OnInit, Input } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { BackendService } from '../backend.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private title = "farah's website";

  constructor(private matMenuModule: MatMenuModule, private _backendService: BackendService) { }

  ngOnInit() {
    this._backendService.confirmConnection();
  }
}
