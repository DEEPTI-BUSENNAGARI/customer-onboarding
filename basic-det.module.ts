import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BasicDetComponent } from './basic-det.component';


const BasicDetModuleRoute: Routes = [
  {
    path: '',
    component: BasicDetComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BasicDetModuleRoute)
  ],
  exports: [RouterModule]
})

export class BasicDetModule { }
