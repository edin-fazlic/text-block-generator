import {Injectable} from '@angular/core';
import {Item} from '../models/item.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class ItemService {

  private readonly baseUrl: string = `${environment.backendUrl}/items`;

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

  public update(id:string, item:Item): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${id}`, item);
  }

  public delete(id:string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
