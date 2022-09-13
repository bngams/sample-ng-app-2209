import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <img
        width="40"
        alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
      />
      <span>{{ title }}</span>
      <div class="spacer"></div>
      <nav id="mainNav">
        <ul>
          <li>
            <!-- complete syntax -->
            <a [routerLink]="['/home']"
              [routerLinkActive]="'current'">
              Home
            </a>
          </li>
          <li>
            <!-- simple syntax -->
            <a routerLink="/get-started"
              routerLinkActive="current">
              Get Started
            </a>
          </li>
          <li>
            <mat-icon fontIcon="person">person</mat-icon>
          </li>
        </ul>
      </nav>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1;
    }

    ul {
      list-style-type: none;
      display: flex;
    }

    li {
      margin: 0 15px;
    }

    a {
      color: #fff;
      text-decoration: none;
    }

    .current {
      font-weight: bolder;
      text-decoration: underline;
    }
  `]
})
export class HeaderComponent implements OnInit {
  @Input()
  title!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
