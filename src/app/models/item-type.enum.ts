export enum ItemType {
  hands = 'hands',
  feet = 'feet',
  head = 'head',
}

export const ItemTypeMapping = {
  [ItemType.hands]: {
    label: 'Gloves',
    icon: 'circle',
    value: ItemType.hands,
  },
  [ItemType.feet]: {
    label: 'Boots',
    icon: 'ice_skating',
    value: ItemType.feet,
  },
  [ItemType.head]: {
    label: 'Helmet',
    icon: 'sports_motorsports',
    value: ItemType.head,
  },
}
