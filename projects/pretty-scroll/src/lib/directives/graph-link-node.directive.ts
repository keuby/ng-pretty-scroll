import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[kbGraphLinkNode]',
})
export class GraphLinkNodeDirective {
    el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement as HTMLElement;
    }

    getBoundingClientRect() {
        return this.el.getBoundingClientRect();
    }
}
