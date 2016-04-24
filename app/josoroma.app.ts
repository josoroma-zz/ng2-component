import {Component} from 'angular2/core';
import {Collapse} from 'ng2-bootstrap/components/collapse';

@Component({
  selector: 'josoroma-app',
  directives: [Collapse],
  templateUrl: './app/josoroma.app.html',
  styleUrls: ['./app/josoroma.app.css']
})
export class JosoromaApp {
  public isCollapsed: boolean = false;
}
