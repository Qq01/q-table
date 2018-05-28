import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MakeSafePipe } from './make-safe.pipe';
import { TableLightComponent } from './table-light/table-light.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MakeSafePipe,
    TableLightComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TableLightComponent
  ]
})
export class AppModule { }
