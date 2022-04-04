import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Item} from '../models/item.model';
import {dbItems} from '../utils/fake-db';
import {Route} from '../constants/route.constants';
import {ItemProperty} from '../models/item-property.enum';

@Injectable({providedIn: 'root'})
export class ItemResolver implements Resolve<Item> {

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Item> | Promise<Item> | Item {
    const item = dbItems.find(item => item[ItemProperty.id] === route.paramMap.get(Route.ID.substring(1)));
    if(!item) {
      throw 'Item not found!';
    }
    return item;
  }
}
