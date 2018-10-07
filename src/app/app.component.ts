import { Component } from '@angular/core';
import { element } from 'protractor';
import { ServerElement } from './serverElement.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements : ServerElement[] = [
    new ServerElement("server 1 name ","server 1 content","server")
  ];

  onServerCreatedConsumer(serverElement:ServerElement){
    this.serverElements.push(serverElement);
  }

  onBlueprintCreatedConsumer(serverElement:ServerElement){
    this.serverElements.push(serverElement);
  }
}
