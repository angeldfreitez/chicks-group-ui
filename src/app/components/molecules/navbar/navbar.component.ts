import {Component} from '@angular/core';
import {ButtonComponent} from '../../atoms/button/button.component';
import {ButtonProps} from '../../../core/entitys/components/button';
import {NavbarItems} from '../../../core/entitys/components/navbar';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ImgComponent} from '../../atoms/img/img.component';
import {FilterSVG} from '../../../core/entitys/components/img';
import {LinkComponent} from '../../atoms/link/link.component';
import {RoutesAvailable} from '../../../core/entitys/routes';
import {IconComponent} from '../../atoms/icon/icon.component';
import {Icon} from '../../../core/entitys/components/icon';
import {NavbarMenuItemComponent} from '../navbar-menu-item/navbar-menu-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonComponent,
    NgForOf,
    NgIf,
    ImgComponent,
    LinkComponent,
    NgClass,
    IconComponent,
    NavbarMenuItemComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  button: ButtonProps = {
    style: {
      background: '#38e29d',
      color: 'black',
      fontSize: '12px',
      fontWeight: '500',
      iconSize: '24px',
      padding: '10px 20px',
      margin: '0'
    },
    text: 'SING IN',
    requiredIcon: true,
    icon: 'person'
  }
  items: NavbarItems[] = [
    {
      text: 'Home',
      url: '/home',
      hovered: false,
      icon: Icon.PERSON,
      subItems: [
        {
          text: 'Sub Item 1',
          url: RoutesAvailable.ROOT,
          hovered: false,
          icon: Icon.PERSON,
        },
        {
          text: 'Sub Item 2',
          url: RoutesAvailable.ROOT,
          hovered: false,
          icon: Icon.SHOPPING_CART,
        }
      ]
    },
    {
      text: 'About',
      url: '/about',
      hovered: false,
      subItems: [
        {
          text: 'Sub Item 1',
          url: RoutesAvailable.ROOT,
          hovered: false,
          icon: Icon.PERSON,
        },
        {
          text: 'Sub Item 2',
          url: RoutesAvailable.ROOT,
          hovered: false,
          icon: Icon.SHOPPING_CART,
        }
      ]
    },
    {
      text: 'Contact',
      url: '/contact',
      hovered: false,
      subItems: [
        {
          text: 'Sub Item 1',
          url: RoutesAvailable.ROOT,
          hovered: false,
          icon: Icon.PERSON,
        },
        {
          text: 'Sub Item 2',
          url: RoutesAvailable.ROOT,
          hovered: false,
          icon: Icon.SHOPPING_CART,
        }
      ]
    }
  ]
  logoMargin:string = '0 0 15px 0';
  sidebarActive = false;
  currentIcon:Icon = Icon.KEYBOARD_ARROW_DOWN;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
  onMouseOver(item:NavbarItems) {
    item.hovered = true;
  }

  onMouseOut(item:NavbarItems) {
    item.hovered = false;
  }

  protected readonly FilterSVG = FilterSVG;
  protected readonly RoutesAvailable = RoutesAvailable;
  protected readonly Icon = Icon;
}
