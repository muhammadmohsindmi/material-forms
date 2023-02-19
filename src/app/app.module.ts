import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterilaModule } from './materila/materila.module';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactformComponent } from './reactform/reactform.component';
import { NestedformComponent } from './nestedform/nestedform.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactformComponent,
    NestedformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterilaModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
