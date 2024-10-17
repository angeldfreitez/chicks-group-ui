import { Component } from '@angular/core';
import {SocialLinkComponent} from "../../molecules/social-link/social-link.component";
import {ImgComponent} from "../../atoms/img/img.component";
import {TrustpilotComponent} from "../../molecules/trustpillot/trustpilot.component";
import {CollapsibleMenuComponent} from "../../molecules/colapsible-menu/collapsible-menu.component";
import {NgForOf} from "@angular/common";
import {MenuSection} from "../../../core/entitys/components/collapse-menu";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SocialLinkComponent,
    ImgComponent,
    TrustpilotComponent,
    CollapsibleMenuComponent,
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerMenu: MenuSection[] = [
    {
      title: 'Company',
      items: [
        {
          title: 'About Us',
          link: '/'
        },
        {
          title: 'Blog',
          link: '/'
        },
        {
          title: 'Careers',
          link: '/'
        },
      ]
    },
    {
      title: 'Products',
      items: [
        {
          title: 'About Us',
          link: '/'
        },
        {
          title: 'Blog',
          link: '/'
        },
        {
          title: 'Careers',
          link: '/'
        },
        {
          title: 'Press',
          link: '/'
        },
        {
          title: 'Contact Us',
          link: '/'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          title: 'Careers',
          link: '/'
        },
        {
          title: 'Press',
          link: '/'
        },
        {
          title: 'Contact Us',
          link: '/'
        }
      ]
    }
  ]
}
