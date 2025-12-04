import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '@constants/routes.constants';

@Component({
  selector: 'app-menu-nav',
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-nav.component.html',
  styleUrl: './menu-nav.component.scss'
})
export class MenuNavComponent {
  routes = APP_ROUTES;
}
