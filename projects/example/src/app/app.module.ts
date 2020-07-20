import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrettyScrollModule } from 'pretty-scroll';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, PrettyScrollModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
