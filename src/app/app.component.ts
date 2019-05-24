import {Component} from '@angular/core';
import {SignInService} from "./auth/signin.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: SignInService) { }
  title = 'News App';

}
