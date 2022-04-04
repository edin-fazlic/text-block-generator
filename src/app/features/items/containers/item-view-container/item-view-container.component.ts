import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Item} from '../../../../models/item.model';
import {ResolverResponse} from '../../../../constants/resolver-response.constants';

@Component({
  selector: 'app-item-view-container',
  templateUrl: './item-view-container.component.html',
})
export class ItemViewContainerComponent implements OnInit {

  public item: Item | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.item = response[ResolverResponse.ITEM];
    });
  }

}
