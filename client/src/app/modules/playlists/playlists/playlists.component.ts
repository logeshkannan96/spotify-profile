import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata/userdata.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists: any;

  constructor(private userDataService: UserdataService) { }

  ngOnInit() {
    this.userDataService.getUsersPlaylists().subscribe(data => {
      this.playlists = data['items']
      console.log(this.playlists)
    });
  }

}
