import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  addBlock: EventEmitter<{
    text: string,
    color: string,
    boldSelected: boolean,
    italicSelected: boolean,
  }> = new EventEmitter<{
    text: string,
    color: string,
    boldSelected: boolean,
    italicSelected: boolean,
  }>();

  public colors: string[] = ['RED', 'GREEN', 'BLUE'];

  public isBold: boolean = false;
  public isItalic: boolean = false;
  public selectedColor: string = '';
  public inputValue: string = '';

  public toggleBold(): void {
    this.isBold = !this.isBold;
  }

  public toggleItalic(): void {
    this.isItalic = !this.isItalic;
  }

  public submit(): void {
    const block = {
      text: this.inputValue,
      color: this.selectedColor,
      boldSelected: this.isBold,
      italicSelected: this.isItalic,
    };

    this.addBlock.emit(block);

    this.selectedColor = '';
    this.isBold = false;
    this.isItalic = false;
    this.inputValue = '';
  }

  public selectColor(color: string): void {
    this.selectedColor = color;
  }
}
