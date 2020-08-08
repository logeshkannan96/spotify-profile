import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksComponent } from './tracks/tracks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TracksComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TracksModule { }
