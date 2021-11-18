import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { PerformanceObject } from '../interfaces/performance';
import { DescriptionObject } from '../interfaces/description';

@Injectable({
  providedIn: 'root'
})
export class HubConnectionService {
  public performance: PerformanceObject
  public description: DescriptionObject
 
  private _hubConnection!: HubConnection;

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  connectToMonitor() {
    this._hubConnection.invoke('ConnectToMonitor');
  }

  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:12756/monitorhub')
      .build();
  }

  private startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        console.log('Hub connection started');
        this.connectToMonitor();
      })
      .catch(() => {
        setTimeout( () => {  this.startConnection(); }, 1000)
      });
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on('UpdatePerformance', (data: PerformanceObject) => {
      this.performance = data;
    });

    this._hubConnection.on('UpdateDescription', (data: DescriptionObject) => {
      this.description = data;
    });
  }
}
