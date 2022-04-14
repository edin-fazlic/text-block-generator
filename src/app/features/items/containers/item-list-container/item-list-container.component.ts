import {Component, OnInit} from '@angular/core';
import {Item} from '../../../../models/item.model';
import {ActivatedRoute} from '@angular/router';
import {ResolverResponse} from '../../../../constants/resolver-response.constants';

@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
})
export class ItemListContainerComponent implements OnInit {

  public items: Item[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      console.log(response);
      this.items = response[ResolverResponse.ITEMS];
    });
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
