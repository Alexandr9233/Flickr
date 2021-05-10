import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/shared/material-module';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';

@NgModule({
  declarations: [SearchPageComponent, WelcomeComponent, BookmarkComponent],
  imports: [MaterialModule, BrowserModule],
  exports: [SearchPageComponent],
})
export class MainModule {}
