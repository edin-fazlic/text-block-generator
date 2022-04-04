import {Rarity} from '../models/rarity.enum';
import {ItemType} from '../models/item-type.enum';

const rarityBasedPrice = {
  [Rarity.rare]: 20,
  [Rarity.epic]: 50,
  [Rarity.legendary]: 150,
}
const itemTypeBasedPrice = {
  [ItemType.hands]: 15,
  [ItemType.head]: 20,
  [ItemType.feet]: 30,
}

export function calculateGold(rarity: Rarity | undefined, itemType: ItemType | undefined,
                              isAttack: boolean, isDefense: boolean): number {
  let gold = 0;
  gold += rarity ? rarityBasedPrice[rarity] : 0;
  gold += itemType ? itemTypeBasedPrice[itemType] : 0;
  gold += (isAttack && isDefense) ? 75 : ((isAttack || isDefense) ? 25 : 0);
  return gold;
}
