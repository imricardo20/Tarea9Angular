import { Component } from '@angular/core';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-fakedata',
  templateUrl: './fakedata.component.html',
  styleUrls: ['./fakedata.component.css']
})
export class FakedataComponent {
  constructor(public Fakedata: FakedataService) {}

  ngOnInit() {
    this.Fakedata.getApiInfo();
  }
}
