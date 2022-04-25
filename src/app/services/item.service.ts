import {Injectable} from '@angular/core';
import {Item} from '../models/item.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ItemService {

  private readonly baseUrl: string = 'http://localhost:8080/items';

  constructor(private http:HttpClient) {
  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }

  public getItem(id:string): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }

  public create(item:Item): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}`, item);
  }

}
