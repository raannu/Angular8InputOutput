import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subchild',
  templateUrl: './subchild.component.html',
  styleUrls: ['./subchild.component.css']
})
export class SubchildComponent implements OnInit {

  constructor() { }
  @Input() subChildData:string;

  @Output() subChildEvent = new EventEmitter();

  ngOnInit() {
  }
  onChange2(data2:string){
    
    this.subChildEvent.emit(data2);
  }

}
