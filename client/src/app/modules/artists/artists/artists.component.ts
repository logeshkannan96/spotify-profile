import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  topArtists: any;
  favArtists: any;

  constructor(private userDataService: UserdataService, private router: Router) {
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.userDataService.getTopArtistsMedium().subscribe(data => {
      console.log("top artists = ", data)
      this.topArtists = data['items']
    })

    this.userDataService.getFollowingData(10).subscribe(data => {
      console.log("artists followed = ", data)
      this.favArtists = data['artists'].items;
    })
  }

}
