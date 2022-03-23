import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  blocks: { text: string; color: string; boldSelected: boolean; italicSelected: boolean }[] = [];

  @Output()
  removeBlock:EventEmitter<{ text: string; color: string; boldSelected: boolean; italicSelected: boolean }> = new EventEmitter<{text: string; color: string; boldSelected: boolean; italicSelected: boolean}>()

  public removeAllowed:boolean = false;

  public toggleAllowRemove(): void {
    this.removeAllowed = !this.removeAllowed;
  }

  public remove(block: { text: string; color: string; boldSelected: boolean; italicSelected: boolean }): void {
    this.removeBlock.emit(block);
  }
}
