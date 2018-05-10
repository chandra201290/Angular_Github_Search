import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';
import {GithubUser} from '../model/Github.users';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  @Input() githubUser: GithubUser;

  constructor() {

  }

  ngOnInit() { }

}
