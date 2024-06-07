import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { GameMainPageComponent } from './pages/game-main/game-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <game-main></game-main>
  `,
  imports: [
    GameMainPageComponent
  ]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
