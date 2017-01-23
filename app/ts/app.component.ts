import {Component} from 'angular2/core';
import {Config} from './config.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.component.html';



})

export class AppComponent {
	heading = Config.myHeading;
	subHeading = Config.mySubHeading;
}
