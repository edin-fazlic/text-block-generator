import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatsComponent} from './features/stats/stats.component';
import {Route} from './constants/route.constants';
import {PageNotFoundComponent} from './features/common/page-not-found/page-not-found.component';
import {MainComponent} from './features/common/main/main.component';
import {
  ItemListContainerComponent
} from './features/items/containers/item-list-container/item-list-container.component';
import {
  ItemFormContainerComponent
} from './features/items/containers/item-form-container/item-form-container.component';
import {
  ItemViewContainerComponent
} from './features/items/containers/item-view-container/item-view-container.component';
import {ItemResolver} from './resolvers/item.resolver';
import {ResolverResponse} from './constants/resolver-response.constants';
import {ItemsResolver} from './resolvers/items.resolver';

const routes: Routes = [
  {
    path: Route.EMPTY,
    component: MainComponent,
    children: [
      {
        path: Route.ITEMS,
        children: [
          {
            path: Route.EMPTY,
            component: ItemListContainerComponent,
            resolve: {
              [ResolverResponse.ITEMS]: ItemsResolver,
            }
          },
          {
            path: Route.ADD,
            component: ItemFormContainerComponent,
          },
          {
            path: Route.ID,
            component: ItemViewContainerComponent,
            resolve: {
              [ResolverResponse.ITEM]: ItemResolver,
            },
          },
          {
            path: Route.ID + Route.SEPARATOR + Route.EDIT,
            component: ItemFormContainerComponent,
            resolve: {
              [ResolverResponse.ITEM]: ItemResolver,
            },
          },
        ],
      },
      {
        path: Route.STATS,
        component: StatsComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
