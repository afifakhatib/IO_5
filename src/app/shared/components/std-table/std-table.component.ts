import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/std.interface';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

 @Input() stdInfo !: Array<Istd>

  constructor() { }

  ngOnInit(): void {
  }



}
