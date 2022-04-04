import {ItemProperty} from './item-property.enum';
import {ItemType} from './item-type.enum';
import {Rarity} from './rarity.enum';

export interface Item {
  [ItemProperty.id]?: string;
  [ItemProperty.name]: string;
  [ItemProperty.rarity]: Rarity;
  [ItemProperty.isAttack]?: boolean;
  [ItemProperty.isDefense]?: boolean;
  [ItemProperty.itemType]: ItemType;
}
