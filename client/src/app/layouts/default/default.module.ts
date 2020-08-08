import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {
  MatSidenavModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule,
  MatButtonModule
} from "@angular/material";
import { DefaultComponent } from './default.component';
import { ProfileModule } from 'src/app/modules/profile/profile.module';
import { ArtistsModule } from 'src/app/modules/artists/artists.module';
import { TracksModule } from 'src/app/modules/tracks/tracks.module';
import { PlaylistsModule } from 'src/app/modules/playlists/playlists.module';
import { RecentModule } from 'src/app/modules/recent/recent.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,

    //User Defined
    ProfileModule,
    ArtistsModule,
    TracksModule,
    PlaylistsModule,
    RecentModule
  ]
})
export class DefaultModule { }
