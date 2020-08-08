import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artist/artist.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ArtistsComponent, ArtistComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ]
})
export class ArtistsModule { }
