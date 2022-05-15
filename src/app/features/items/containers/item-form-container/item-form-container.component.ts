import {Component, OnInit} from '@angular/core';
import {Item} from '../../../../models/item.model';
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
      this.itemService.update(item[ItemProperty.id]!, item).subscribe(() => {
        this.router.navigate([Route.ITEMS]);
      });
    } else {
      this.itemService.create(item).subscribe(() => {
        this.router.navigate([Route.ITEMS]);
      });
    }
  }
}
