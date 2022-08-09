import { NgModule } from "@angular/core";
import { AppModule } from '../app.module';
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
declarations:[
    ContadorComponent
],

exports:[
    ContadorComponent
],

imports:[
    CommonModule
]

})

export class ContadoresModule{}