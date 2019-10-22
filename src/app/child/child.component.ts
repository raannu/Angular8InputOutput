import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  subChildData:string;
  constructor() { }
  @Input() parentData:string;

  @Output() childEvent = new EventEmitter();

  ngOnInit() {
  }

  onChange(data:string){
    this.childEvent.emit(data);
  }
  test2(data2:string){
    this.subChildData = data2;
  }

}
