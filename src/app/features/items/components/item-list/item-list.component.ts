import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../../../../models/item.model';
import {RarityMapping} from '../../../../models/rarity.enum';
import {ItemProperty} from '../../../../models/item-property.enum';
import {ItemTypeMapping} from '../../../../models/item-type.enum';
import {Route} from '../../../../constants/route.constants';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input()
  items: Item[] = [];

  @Output()
  removeItem: EventEmitter<Item> = new EventEmitter<Item>()

  public itemProperty = ItemProperty;
  public route = Route;

  public removeAllowed: boolean = false;

  public toggleAllowRemove(): void {
    this.removeAllowed = !this.removeAllowed;
  }

  public remove(item: Item): void {
    this.removeItem.emit(item);
  }

  getItemColor(item: Item) {
    return RarityMapping[item[ItemProperty.rarity]].color;
  }

  getItemType(item: Item) {
    return ItemTypeMapping[item[ItemProperty.itemType]].icon;
  }
}
