import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  
  @ViewChild('serverNameInput') serverNameInput : ElementRef;
  @ViewChild('serverContentInput') serverContentInput : ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.onServerCreated.emit(new ServerElement(this.serverNameInput.nativeElement.value,
                                                this.serverContentInput.nativeElement.value,'server'));
  }

  onAddBluePrint(){
    this.onBluePrintCreated.emit(new ServerElement(this.serverNameInput.nativeElement.value, 
                                                   this.serverContentInput.nativeElement.value,'blueprint'))
  }
}
