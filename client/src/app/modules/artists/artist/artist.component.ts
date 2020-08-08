import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from 'src/app/services/userdata/userdata.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: any;
  artistName: any;
  artistPopularity: any;
  artistGenres: any;
  artistExternalUrls: any;
  artistFollowers: any;
  artistImage: any;
  topTracks: any;

  constructor(private route: ActivatedRoute, private userDataService: UserdataService, private title: Title) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    })
    this.getData();
    this.title.setTitle('Artist Profile - Spotify Profile')
  }

  ngOnInit() {
  }

  getData() {
    this.userDataService.getAnArtist(this.id).subscribe(data => {
      console.log("artist data = ", data)
      this.artistName = data['name'];
      this.artistPopularity = data['popularity'];
      this.artistGenres = data['genres'];
      this.artistExternalUrls = data['external_urls'].spotify;
      this.artistFollowers = data['followers'].total;
      this.artistImage = data['images'][0].url;
    })

    this.userDataService.getTopTracksOfArtist(this.id).subscribe(data => {
      console.log("Top Tracks of artist = ", data['tracks'])
      this.topTracks = data['tracks'];
    })
  }

  calculateDuration(millis: any) {
    let minutes: any = Math.floor(millis / 60000);
    let seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

}
