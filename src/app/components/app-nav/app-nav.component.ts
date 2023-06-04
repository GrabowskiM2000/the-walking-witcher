import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppNavComponent implements OnInit {
  public mobileVisible: boolean = false;
  public mobileCloseAnimation: boolean = false;
  public burgerAnimation: boolean = false;

  constructor(private ref: ChangeDetectorRef, public router: Router) {}

  ngOnInit(): void {}

  public burgerClick(): void {
    if (this.mobileVisible) {
      this.mobileCloseAnimation = true;
      setTimeout(() => {
        this.mobileVisible = false;
        this.ref.detectChanges();
      }, 1000);
    } else {
      this.mobileCloseAnimation = false;
      this.mobileVisible = true;
      this.ref.detectChanges();
    }
    this.burgerAnimation = !this.burgerAnimation;
  }

  public mobileLinkClick(): void {
    this.mobileVisible = false;
    this.ref.detectChanges();
  }

  @HostListener('window:resize', [])
  hideMobileMenu() {
    if (window.innerWidth >= 700) {
      this.mobileVisible = false;
      this.burgerAnimation = false;
      this.ref.detectChanges();
    }
  }

  shouldShow() {
    return this.router.url.slice(0, 6) !== '/auth/';
  }
}
