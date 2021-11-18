import { Component, OnInit } from '@angular/core';
import { HubConnectionService } from '../../services/hub-connection.service';

@Component({
  selector: 'epm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public hubconnectionService: HubConnectionService
  ) { }

  ngOnInit(): void {
  }

}
