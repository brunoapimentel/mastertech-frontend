import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private fb: FacebookService){
    let initParams: InitParams = {
      appId: '1852144651479514',
      xfbml: true,
      version: 'v2.10'
    };

    fb.init(initParams)
  }

  loginWithFacebook() {
    this.fb.login()
      .then((response: LoginResponse) => {
          console.log(response);
          this.getData();
      })
      .catch((error: any) => console.error(error));
  }

  getData() {
    this.fb.api('/me')
      .then((response) => {
          console.log(response)
      })
      .catch((error: any) => console.error(error));
  }

}
