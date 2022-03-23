import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public blocks: { text: string; color: string; boldSelected: boolean; italicSelected: boolean }[] = [];

  addBlock(block: { text: string; color: string; boldSelected: boolean; italicSelected: boolean }) {
    this.blocks.push(block);
  }

  removeBlock(block: { text: string; color: string; boldSelected: boolean; italicSelected: boolean }) {
    const index = this.blocks.indexOf(block);
    if (index > -1) {
      this.blocks.splice(index, 1);
    }
  }
}
