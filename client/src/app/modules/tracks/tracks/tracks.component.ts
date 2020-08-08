import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata/userdata.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  isTopTracksActive: boolean = true;
  isFavouritesActive: boolean = false;

  tracks: any;

  constructor(private userDataService: UserdataService) { }

  ngOnInit() {
    this.topTracks();
    // this.favourites();
  }

  topTracks() {
    this.isTopTracksActive = true;
    this.isFavouritesActive = false;

    this.userDataService.getTopTracksLong().subscribe(data => {
      this.tracks = data['items'];
      console.log(this.tracks)
    })
  }

  favourites() {
    this.isTopTracksActive = false;
    this.isFavouritesActive = true;

    this.userDataService.getSavedTracks().subscribe(data => {
      let trackList = data['items'];
      this.tracks = trackList.map(trackData => trackData.track)
    })
  }

  calculateDuration(millis: any) {
    let minutes: any = Math.floor(millis / 60000);
    let seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}