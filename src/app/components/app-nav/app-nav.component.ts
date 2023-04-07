import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppNavComponent implements OnInit {
  public mobileVisible: boolean = false;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  public burgerClick(): void {
    this.mobileVisible = !this.mobileVisible;
    this.ref.detectChanges();
  }

  public mobileLinkClick(): void {
    this.mobileVisible = false;
    this.ref.detectChanges();
  }

  @HostListener('window:resize', [])
  hideMobileMenu() {
    if (window.innerWidth >= 500) {
      this.mobileVisible = false;
      this.ref.detectChanges();
    }
  }

  // public crossClick(): void {
  //   this.mobileVisible = false;
  // }
}
