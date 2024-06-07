import { Component, OnInit } from '@angular/core';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { GameGridCellComponent } from '../game-grid-cell/game-grid-cell.componet';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone: true,

  selector: 'game-grid',
  templateUrl: './game-grid.component.html',
  styleUrl: './game-grid.component.scss',

  imports: [GameGridCellComponent, CommonModule],
})
export class GameGridComponent extends OnDestroyMixin implements OnInit {
  public gridItems: string[] = [];

  ngOnInit() {
    this.gridItems = this.shuffleArray(this.createPairArray());
  }

  private createPairArray(): string[] {
    let pairArray: string[] = [];
    for (let i = 1; i <= 18; i++) {
      pairArray.push(i.toString(), i.toString()); // Add each number twice to form pairs
    }
    return pairArray;
  }

  private shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements randomly
    }
    return array;
  }
}
