import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists/playlists.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlaylistsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PlaylistsModule { }
