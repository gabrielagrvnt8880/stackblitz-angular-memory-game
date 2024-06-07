import { Component } from '@angular/core';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { GameGridComponent } from '../../components/game-grid/game-grid.component';

@Component({
  standalone: true,

  selector: 'game-main',
  templateUrl: './game-main.component.html',
  styleUrl: './game-main.component.scss',

  imports: [GameGridComponent],
})
export class GameMainPageComponent extends OnDestroyMixin {}
