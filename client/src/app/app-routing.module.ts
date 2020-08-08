import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { ArtistsComponent } from './modules/artists/artists/artists.component';
import { TracksComponent } from './modules/tracks/tracks/tracks.component';
import { PlaylistsComponent } from './modules/playlists/playlists/playlists.component';
import { RecentComponent } from './modules/recent/recent/recent.component';
import { ArtistComponent } from './modules/artists/artist/artist.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "spotify", component: DefaultComponent, children: [
      { path: "", component: ProfileComponent },
      { path: "profile", component: ProfileComponent },
      { path: "artists", component: ArtistsComponent },
      { path: "tracks", component: TracksComponent },
      { path: "playlists", component: PlaylistsComponent },
      { path: "recent", component: RecentComponent },
      { path: "artist/:id", component: ArtistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
