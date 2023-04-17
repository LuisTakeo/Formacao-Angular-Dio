import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu.component';
import { Button } from './button.component';
import { EntryDataComponent } from './entry-data.component';


@NgModule({
  declarations: [
    AppComponent, HelloComponent, MenuComponent, Button, EntryDataComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
