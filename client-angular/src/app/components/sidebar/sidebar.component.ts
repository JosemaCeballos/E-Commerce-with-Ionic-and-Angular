import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [
    { name: 'Login', url: '/user', icon: 'account_circle' },
    { name: 'Home', url: '/', icon: 'home' },
    { name: 'Store', url: '/store', icon: 'store' },
    { name: 'Favorites', url: '/favorites', icon: 'favorite' },
    { name: 'Cart', url: '/cart', icon: 'shopping_cart' }
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private _router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  goSearch(event: any) {
    this._router.navigate([event])
  }
}
