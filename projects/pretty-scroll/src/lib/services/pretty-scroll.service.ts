import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import { Options } from '@better-scroll/core';
import { override, merge } from '../../shared/util';
import { BetterScroll } from '../../core';

export const KB_SCROLL_CONFIG = new InjectionToken<any>('kb-scroll-config');

export type ScrollConfig = Partial<Options>;

@Injectable({
    providedIn: 'root',
})
export class PrettyScrollService {
    private defaultConfig: ScrollConfig = {
        mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300,
        },
        scrollbar: {
            fade: false,
            interactive: true,
        },
        observeDOM: true,
    };

    constructor(@Optional() @Inject(KB_SCROLL_CONFIG) config?: any) {
        this.setDefaultConfig(config);
    }

    makePrettyScroll(el: HTMLElement | string, config?: ScrollConfig) {
        const merged = merge(this.defaultConfig, config);
        return new BetterScroll(el, merged);
    }

    setDefaultConfig(config: ScrollConfig) {
        this.defaultConfig = override(this.defaultConfig, config);
    }
}
