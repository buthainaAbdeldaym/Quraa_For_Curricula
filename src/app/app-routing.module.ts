import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent},
  {path:'home',component:MainLayoutComponent},
  {path:'first-grade',loadChildren: () => import('./first-grade/first-grade.module').then(m => m.FirstGradeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
