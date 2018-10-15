import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Aka',
    firstName : 'Dje',
    age : 777,
    quote : '',
    photo : 'https://content.internetvideoarchive.com/content/photos/1424/05984531_.jpg',
    showAge : false
  };

  constructor() { }

  ngOnInit() {
  }

  togglAge() {
    this.User.showAge = !this.User.showAge;
  };

}
