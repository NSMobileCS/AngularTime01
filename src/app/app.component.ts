import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Time Display App';

  westCoastTime = 1;
  timeZones: String[] = ["East Coast", "West Coast"];

  chkTime = () => {
    var t = new Date();
    if (!this.westCoastTime){
      t.setHours(t.getHours()-3);
    }
    return (t+'').split(' GMT')[0];
  }

  toggleTime = () => {
    this.westCoastTime = (this.westCoastTime + 1) % 2;
  }

  showTZ = () => this.timeZones[this.westCoastTime];

  showOtherTZ = () => this.timeZones[(this.westCoastTime+1)%2];
  

}

