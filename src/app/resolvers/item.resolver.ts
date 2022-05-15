import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Item} from '../models/item.model';
import {Route} from '../constants/route.constants';
import {ItemService} from '../services/item.service';

@Injectable()
export class ItemResolver implements Resolve<Item> {

  constructor(private itemService:ItemService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Item> | Promise<Item> | Item {
    const id = route.paramMap.get(Route.ID.substring(1));
    const item = this.itemService.getItem(id!);
    if(!item) {
      throw 'Item not found!';
    }
    return item;
  }

}
