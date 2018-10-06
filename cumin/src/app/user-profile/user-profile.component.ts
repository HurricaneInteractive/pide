import { Component, Input } from '@angular/core';

interface UserProfile {
  name: string,
  image: string
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {
  private _user_profile: UserProfile;
  
  @Input() set user(user: any) {
    this._user_profile = {
      name: user.display_name || user.name,
      image: user.images.length > 0 ? user.images[0].url : 'http://www.gravatar.com/avatar/?d=identicon'
    }
  }

  get user() {
    return this._user_profile
  }
}