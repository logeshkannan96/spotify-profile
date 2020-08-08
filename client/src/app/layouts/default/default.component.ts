import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit {

  isProfileActive: boolean = false;
  isArtistsActive: boolean = false;
  isTracksActive: boolean = false;
  isRecentActive: boolean = false;
  isPlaylistsActive: boolean = false;

  constructor(private route: Router, private location: Location) {
  }

  ngOnInit() {
  }

  logout() {
    window.localStorage.removeItem('my_spotify_access_token');
    window.localStorage.removeItem('my_spotify_refresh_token');
    this.route.navigate(['/login'])
  }

}
