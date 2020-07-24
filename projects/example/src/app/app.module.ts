import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrettyScrollModule, KB_SCROLL_CONFIG } from 'pretty-scroll';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, PrettyScrollModule],
    providers: [
        {
            provide: KB_SCROLL_CONFIG,
            useValue: {
                mouseWheel: {
                    speed: 20,
                    invert: false,
                    easeTime: 300,
                },
                scrollbar: {
                    fade: false,
                    interactive: true,
                },
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
