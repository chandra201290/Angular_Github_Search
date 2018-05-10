import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import {GithubService} from './services/github.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ProfileComponent} from './search-users/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
