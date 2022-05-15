import {Component, OnInit} from '@angular/core';
import {Item} from '../../../../models/item.model';
import {ItemProperty} from '../../../../models/item-property.enum';
import {ItemService} from '../../../../services/item.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
})
export class ItemListContainerComponent implements OnInit {

  public items: Subject<Item[]> = new Subject<Item[]>();

  constructor(
    private itemService: ItemService,
  ) {
  }

  ngOnInit(): void {
    this.reloadItems();
  }

  removeItem(item: Item) {
    this.itemService.delete(item[ItemProperty.id]!).subscribe(() => {
      this.reloadItems();
    });
  }

  private reloadItems() {
    this.itemService.getItems().subscribe(items => {
      this.items.next(items);
    });
  }
}
