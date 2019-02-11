import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import { MatTableModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ViewComponent } from './view/view.component';
import { FormComponent } from './form/form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormaddComponent } from './formadd/formadd.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewComponent,
    FormComponent,
    FormaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
