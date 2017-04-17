import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResetComponent } from './reset.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path:'',component:ResetComponent}
    ])
  ],
  declarations: [
    ResetComponent
  ],
})
export class ResetModule { }
