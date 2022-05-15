import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemFormComponent} from './features/items/components/item-form/item-form.component';
import {ItemListComponent} from './features/items/components/item-list/item-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './features/common/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app-routing.module';
import {StatsComponent} from './features/stats/stats.component';
import {PageNotFoundComponent} from './features/common/page-not-found/page-not-found.component';
import {MainComponent} from './features/common/main/main.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {
  ItemListContainerComponent
} from './features/items/containers/item-list-container/item-list-container.component';
import {ItemViewComponent} from './features/items/components/item-view/item-view.component';
import {
  ItemFormContainerComponent
} from './features/items/containers/item-form-container/item-form-container.component';
import {
  ItemViewContainerComponent
} from './features/items/containers/item-view-container/item-view-container.component';
import {MatListModule} from '@angular/material/list';
import {ItemResolver} from './resolvers/item.resolver';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ItemService} from './services/item.service';
import {HttpClientModule} from '@angular/common/http';
import {provideAuthorizationInterceptor} from './interceptors/authorization.interceptor';
import {AuthorizedGuard} from './guards/authorized.guard';
import {LoginComponent} from './features/common/login/login.component';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemFormComponent,
    ItemFormContainerComponent,
    ItemListComponent,
    ItemListContainerComponent,
    ItemViewComponent,
    ItemViewContainerComponent,
    HeaderComponent,
    StatsComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    HttpClientModule,
  ],
  providers: [
    provideAuthorizationInterceptor(),
    AuthorizedGuard,
    AuthService,
    ItemResolver,
    ItemService,
    ItemResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
