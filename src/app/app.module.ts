import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CssGridSimpleComponent } from './css-grid-simple/css-grid-simple.component';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  {
    path: 'simple',
    component: CssGridSimpleComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
];

@NgModule({
  declarations: [AppComponent, CssGridSimpleComponent, GridComponent],
  imports: [
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([]),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
