import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './modules/main/components/bookmark/bookmark.component';
import { SearchPageComponent } from './modules/main/components/search-page/search-page.component';
import { WelcomeComponent } from './modules/main/components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'bookmark', component: BookmarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
