import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../components/organisms/header/header.component";

@Component({
  selector: 'app-layout-basic',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './layout-basic.component.html',
  styleUrl: './layout-basic.component.css'
})
export class LayoutBasicComponent {

}
