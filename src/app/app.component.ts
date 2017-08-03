import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/index';

@Component({
  selector: 'tp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp';
  constructor(private store: Store<fromRoot.AppState>) {}
}
