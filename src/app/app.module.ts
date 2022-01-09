import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { TableSearchComponent } from './components/table-search/table-search.component';
import { TableInfoComponent } from './components/table-info/table-info.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    TableSearchComponent,
    TableInfoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
