import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwesomeEditComponent } from './awesome-edit/awesome-edit.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';

const routes: Routes = [
  { path: 'awesomes', component: AwesomeListComponent },
  { path: 'awesomes/edit/:id', component: AwesomeEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
