import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerElement } from '../serverElement.model';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  @Output() onServerCreated = new EventEmitter<ServerElement>();
  @Output() onBluePrintCreated = new EventEmitter<ServerElement>();
  
  //name : string = '';
  //content : string = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput : HTMLInputElement, serverContentInput : HTMLInputElement){
    this.onServerCreated.emit(new ServerElement(serverNameInput.value,serverContentInput.value,'server'))
    //this.serverElements.push(new ServerElement(this.name,this.content,'server'));
  }

  onAddBluePrint(serverNameInput : HTMLInputElement, serverContentInput : HTMLInputElement){
    this.onBluePrintCreated.emit(new ServerElement(serverNameInput.value, serverContentInput.value,'blueprint'))
    //this.serverElements.push(new ServerElement(this.name,this.content,'blueprint'))
  }

}
