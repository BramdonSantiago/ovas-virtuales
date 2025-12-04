import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '@constants/routes.constants';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  route = inject(Router);

  routes = APP_ROUTES;

  prev() {
    const urlActually = this.route.url;
    let index = this.routes.indexOf(urlActually);

    if (index > 0) {
      index--;
      this.goToPage(this.routes[index]);
    } 
  }

  next() {
    const urlActually = this.route.url;
    let index = this.routes.indexOf(urlActually);
    
    if (index < this.routes.length - 1) {
      index++;
      this.goToPage(this.routes[index]);
    }
  }

  goToPage(page: string) {
    this.route.navigate([page]);
  }
}
