import {Component, Input} from '@angular/core';
import {Item} from '../../../../models/item.model';
import {ItemProperty} from '../../../../models/item-property.enum';
import {ItemTypeMapping} from '../../../../models/item-type.enum';
import {RarityMapping} from '../../../../models/rarity.enum';
import {Route} from '../../../../constants/route.constants';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent {

  @Input()
  public item!: Item;

  public itemProperty = ItemProperty;
  public route = Route;

  getItemType() {
    return ItemTypeMapping[this.item[ItemProperty.itemType]];
  }

  getItemRarity() {
    return RarityMapping[this.item[ItemProperty.rarity]];
  }

}
