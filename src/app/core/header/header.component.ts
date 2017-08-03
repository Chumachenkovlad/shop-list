import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import { NgSwitch } from '@angular/common';
import { HEADER_TYPES } from '../../store/layout/layout.reducer';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'tp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly HEADER_TYPES = HEADER_TYPES;
  public headerType;
  private headerType$;
  constructor(
    private router: Router,
    private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.headerType$ = this.store.select(fromRoot.getHeaderType)
      .subscribe(ht => this.headerType = ht);
  }

  ngOnDestroy() {
    this.headerType$.unsubscribe();
  }

  goToEditing() {
    this.router.navigateByUrl('/products/edit');
  }
}
