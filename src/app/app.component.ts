import { Component, OnInit } from '@angular/core';
import { HubConnectionService } from './common/services/hub-connection.service';
import { HeaderComponent } from '../app/common/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public hubconnectionService: HubConnectionService
  ) { }

  ngOnInit(): void {
  }
}