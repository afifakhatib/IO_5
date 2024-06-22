import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../../models/std.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('stdForm') stdForm !: NgForm

  @Output() emitStd : EventEmitter<Istd> = new EventEmitter<Istd>();

  onstd(data : Istd){
    if(this.stdForm.valid){
      console.log(this.stdForm.value);
      let newStd = this.stdForm.value
      this.stdForm.reset()
      this.emitStd.emit(newStd)
    }
  }

}
