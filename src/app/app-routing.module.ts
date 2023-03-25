import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableComponent } from './mat-table/mat-table.component';

const routes: Routes = [
  {
    path:'',
    component:MatTableComponent
  },
  {
    path:'*',
    pathMatch:'full',
    redirectTo:'table'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
