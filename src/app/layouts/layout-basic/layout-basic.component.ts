import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../components/organisms/header/header.component";
import {FooterComponent} from "../../components/organisms/footer/footer.component";

@Component({
  selector: 'app-layout-basic',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './layout-basic.component.html',
  styleUrl: './layout-basic.component.css'
})
export class LayoutBasicComponent {

}
