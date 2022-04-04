export enum Rarity {
  legendary = 'legendary',
  epic = 'epic',
  rare = 'rare',
}

export const RarityMapping = {
  [Rarity.legendary]: {
    label: 'Legendary',
    color: '#ff8000',
    value: Rarity.legendary,
  },
  [Rarity.epic]: {
    label: 'Epic',
    color: '#0070dd',
    value: Rarity.epic,
  },
  [Rarity.rare]: {
    label: 'Rare',
    color: '#1eff00',
    value: Rarity.rare,
  },
}
