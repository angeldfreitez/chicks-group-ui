import {Icon} from '../icon';

export interface NavbarItems {
  text: string;
  url: string;
  hovered: boolean;
  icon?: Icon ;
  subItems?: NavbarItems[];
}
