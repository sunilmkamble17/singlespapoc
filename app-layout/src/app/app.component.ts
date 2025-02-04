import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SecureComponent } from './module/secure/secure.component';
import { AuthComponent } from './module/public/auth.component';
import { SideNavComponent } from './module/layouts/side-nav/side-nav.component';
import { FooterComponent } from './module/layouts/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './module/public/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-layout';

  constructor() {
    console.log('from app component');
  }

  
}
