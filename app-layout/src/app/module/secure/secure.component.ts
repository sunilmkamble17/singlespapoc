import { Component } from '@angular/core';
import { SideNavComponent } from '../layouts/side-nav/side-nav.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-secure',
  imports: [RouterOutlet, SideNavComponent, FooterComponent],
  templateUrl: './secure.component.html',
  styleUrl: './secure.component.scss'
})
export class SecureComponent {

}
