import {Component, OnInit} from '@angular/core';
import {Item} from '../../../../models/item.model';
import {dbItems} from '../../../../utils/fake-db';
import {ActivatedRoute, Router} from '@angular/router';
import {Route} from '../../../../constants/route.constants';
import {ItemProperty} from '../../../../models/item-property.enum';
import {ResolverResponse} from '../../../../constants/resolver-response.constants';
import {ItemService} from '../../../../services/item.service';

@Component({
  selector: 'app-item-form-container',
  templateUrl: './item-form-container.component.html',
})
export class ItemFormContainerComponent implements OnInit {

  public item: Item | undefined;

  private isEditing: boolean = false;
  private items: Item[] = dbItems;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
  ) {
  }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path === Route.EDIT;
    if (this.isEditing) {
      this.activatedRoute.data.subscribe((response: any) => {
        this.item = response[ResolverResponse.ITEM];
      });
    }
  }

  saveItem(item: Item): void {
    if (this.isEditing) {
      const existingIndex = this.items.findIndex(i => i[ItemProperty.id] === item[ItemProperty.id]);
      this.items.splice(existingIndex, 1, item);
      this.router.navigate([Route.ITEMS]);
    } else {
      this.itemService.create(item).subscribe(value => {
        this.router.navigate([Route.ITEMS]);
      });
    }
  }
}
