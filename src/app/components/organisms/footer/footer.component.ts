import { Component } from '@angular/core';
import {SocialLinkComponent} from "../../molecules/social-link/social-link.component";
import {ImgComponent} from "../../atoms/img/img.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SocialLinkComponent,
    ImgComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
