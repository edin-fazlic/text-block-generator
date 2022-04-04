import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../../models/item.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemType, ItemTypeMapping} from '../../../../models/item-type.enum';
import {Rarity, RarityMapping} from '../../../../models/rarity.enum';
import {ItemProperty} from '../../../../models/item-property.enum';
import {calculateGold} from '../../../../utils/price-calculation.util';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  @Output()
  saveItem: EventEmitter<Item> = new EventEmitter<Item>();

  @Input()
  item: Item | undefined;

  public readonly rarities = [
    RarityMapping[Rarity.legendary],
    RarityMapping[Rarity.epic],
    RarityMapping[Rarity.rare],
  ];

  public readonly itemTypes = [
    ItemTypeMapping[ItemType.hands],
    ItemTypeMapping[ItemType.feet],
    ItemTypeMapping[ItemType.head],
  ];

  public form!: FormGroup;
  public itemProperty = ItemProperty;
  public isEditable: boolean = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [ItemProperty.id]: [this.item?.[ItemProperty.id] || ''],
      [ItemProperty.name]: [this.item?.[ItemProperty.name] || '', Validators.required],
      [ItemProperty.rarity]: [this.item?.[ItemProperty.rarity] || '', Validators.required],
      [ItemProperty.isAttack]: [this.item?.[ItemProperty.isAttack] || false],
      [ItemProperty.isDefense]: [this.item?.[ItemProperty.isDefense] || false],
      [ItemProperty.itemType]: [this.item?.[ItemProperty.itemType] || '', Validators.required],
    });
  }

  public get rarity() {
    const rarityValue: Rarity | null = this.form.value[ItemProperty.rarity];
    return rarityValue ? RarityMapping[rarityValue] : null;
  }

  public get itemType() {
    const itemTypeValue: ItemType | null = this.form.value[ItemProperty.itemType];
    return itemTypeValue ? ItemTypeMapping[itemTypeValue] : null;
  }

  public calculateGold(): string {
    const isAttack = this.form.value[ItemProperty.isAttack];
    const isDefense = this.form.value[ItemProperty.isDefense];

    const gold = calculateGold(this.rarity?.value, this.itemType?.value, isAttack, isDefense);
    return gold.toString();
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.saveItem.emit(this.form.value);

    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }
}
