import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { PaginatorComponent } from '@components/paginator/paginator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PaginatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ovas-virtuales';
}
