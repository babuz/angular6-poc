import { Component, OnInit, Input } from '@angular/core';
import { ServerElement } from '../serverElement.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element : ServerElement;

  constructor() { }

  ngOnInit() {
  }

}
