import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MainModule } from 'src/app/modules/main/main.module';

@NgModule({
  declarations: [],
  imports: [MainModule, HttpClientModule],
  exports: [MainModule, HttpClientModule],
})
export class SharedModule {}
