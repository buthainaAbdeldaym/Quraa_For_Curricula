import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTermComponent } from './first-term/first-term.component';
import { FirstTermSubjectsComponent } from './first-term/first-term-subjects/first-term-subjects.component';

const routes: Routes = [
  {path:'first-term',component:FirstTermComponent,children:[
    {path:'first-term-subjects',component:FirstTermSubjectsComponent},
    {path:'arabic-language',loadChildren: () => import('./first-term/arabic-language/arabic-language.module').then(m => m.ArabicLanguageModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthGradeRoutingModule { }
