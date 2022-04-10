import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { AtsakymaiComponent } from './components/atsakymai/atsakymai.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AtsakymaiItemsComponent } from './components/atsakymai/atsakymai-items/atsakymai-items.component';


const appRoutes:Routes=[
  {path:'', component:ListComponent},
  {path:'atsakymai',component:AtsakymaiComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AtsakymaiComponent,
    NavigationComponent,
    AtsakymaiItemsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
