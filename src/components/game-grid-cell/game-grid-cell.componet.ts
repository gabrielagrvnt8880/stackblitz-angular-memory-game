import { Component, Input } from '@angular/core';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';

@Component({
  standalone: true,

  selector: 'game-grid-cell',
  templateUrl: './game-grid-cell.component.html',
  styleUrl: './game-grid-cell.component.scss',
})
export class GameGridCellComponent extends OnDestroyMixin {
  @Input() cellNumber: string = '';
}
