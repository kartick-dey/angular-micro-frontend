import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent, pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class UsersModule {}
