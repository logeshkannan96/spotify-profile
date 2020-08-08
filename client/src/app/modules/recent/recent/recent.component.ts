import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata/userdata.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  recentlyPlayed: any;

  constructor(private userDataService: UserdataService) { }

  ngOnInit() {
    this.getRecentlyPlayed();
  }

  getRecentlyPlayed() {
    this.userDataService.getRecentltPlayed().subscribe(data => {
      let recentsList = data['items'];
      this.recentlyPlayed = recentsList.map(trackData => trackData.track)
      console.log(this.recentlyPlayed)
    })
  }

  calculateDuration(millis: any) {
    let minutes: any = Math.floor(millis / 60000);
    let seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

}
