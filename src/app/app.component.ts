import { Component } from '@angular/core';
import {GithubUser} from './model/Github.users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public githubUser1: GithubUser;
  constructor() {
    this.githubUser1 = new GithubUser(false, null, '');
  }
}
