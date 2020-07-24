import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { PrettyScrollService } from '../services/pretty-scroll.service';

@Component({
    selector: 'kb-pretty-scroll[hasWrapper]',
    template: `
        <div *ngIf="hasWrapper; else other" class="kb-pretty-scroll-wrapper">
            <ng-content></ng-content>
        </div>
        <ng-template #other><ng-content></ng-content></ng-template>
    `,
    styles: [
        `
            .kb-pretty-scroll-wrapper {
                overflow: hidden;
                position: relative;
            }
        `,
    ],
})
export class PrettyScrollComponent implements OnInit {
    constructor(
        private scrollService: PrettyScrollService,
        private el: ElementRef
    ) {
        console.log(el);
        console.log(scrollService);
    }

    @Input() hasWrapper: boolean = false;
    @Input() wrapperClass: string;

    ngOnInit(): void {}
}
