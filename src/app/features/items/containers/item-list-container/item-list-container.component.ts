import {Component} from '@angular/core';
import {Item} from '../../../../models/item.model';
import {dbItems} from '../../../../utils/fake-db';

@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
})
export class ItemListContainerComponent {

  public items: Item[] = dbItems;

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
