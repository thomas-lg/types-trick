import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, Tab } from '@types-trick/ui-components';

@Component({
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  selector: 'types-trick-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'types-trick';
  tabs: Tab[] = [
    {
      routerLink: '/typeguards',
      label: 'Typeguards',
    },
    {
      routerLink: '/typescript-utils',
      label: 'Typescript-utils',
    },
    {
      routerLink: '/typeguards-func',
      label: 'Typeguards-func',
    },
    {
      routerLink: '/di',
      label: 'Dependencies injection',
    },
  ];
}
