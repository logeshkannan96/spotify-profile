import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata/userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: any;
  display_name: any;
  avatar_url: any;
  followersCount: any;
  followingCount: any;
  playlistsCount: any

  constructor(private userDataService: UserdataService) {
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.userDataService.getUserInfo().subscribe((data) => {
      this.avatar_url = data['images'][0].url;
      this.display_name = data['display_name'];
      this.followersCount = data['followers'].total;
    });

    this.userDataService.getFollowingData(50).subscribe(data => {
      this.followingCount = data['artists'].total;
    })

    this.userDataService.getCurrentUserPlaylists().subscribe(data => {
      this.playlistsCount = data['total']
    })
  }
}
