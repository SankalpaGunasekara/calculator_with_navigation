import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = ''

  route: Router = new Router
  addHeader() {


    let path = this.route.url.split('/')[1]

    if (path) {
      this.title = decodeURIComponent(path.slice(0, 1).toUpperCase() + path.slice(1));

    }
    else {

      this.title = 'Home'
    }

  }



}
