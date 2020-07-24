import {
    Directive,
    ContentChildren,
    forwardRef,
    AfterContentInit,
    QueryList,
    Input,
    ElementRef,
} from '@angular/core';
import { GraphLinkNodeDirective } from './graph-link-node.directive';

type Point = [number, number, string];

@Directive({
    selector: '[kbGraphLink]',
})
export class GraphLinkDirective implements AfterContentInit {
    @ContentChildren(forwardRef(() => GraphLinkNodeDirective))
    nodes: QueryList<GraphLinkNodeDirective>;

    @Input() verticalGap: number;
    @Input() horizontalGap: number;

    wrapper: HTMLElement;
    points: Point[];

    constructor(private elRef: ElementRef) {
        const el = elRef.nativeElement as HTMLElement;
        const style = el.getAttribute('style');
        el.setAttribute('style', `${style || ''};position:relative;`);
    }

    ngAfterContentInit() {
        const el = this.elRef.nativeElement as HTMLElement;

        const points: Point[] = [];
        const wrapperRect = el.getBoundingClientRect();
        const { left: px, top: py } = wrapperRect;
        const deltaX = this.horizontalGap / 2;
        const deltaY = this.verticalGap / 2;

        for (const node of this.nodes) {
            const rect = node.getBoundingClientRect();
            const y = rect.top - py;
            const x = rect.left - px;
            const { width, height } = rect;

            points.push([x + width + deltaX, y + height / 2, node.el.id]);
            points.push([x + width + deltaX, y + height + deltaY, node.el.id]);
        }

        this.points = points;
        this.buildWrapper(this.elRef.nativeElement);
    }

    buildSvg() {
        const groups: string[] = [];
        const {
            width,
            height,
        } = this.elRef.nativeElement.getBoundingClientRect();

        for (const point of this.points) {
            groups.push(`
                <g id="g-${point[2]}">
                    <circle cx="${point[0]}" cy="${point[1]}" r="5" fill="#F57C00"></circle>
                </g>
            `);
        }

        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:block;" width="${width}" height="${height}">
                ${groups.join('')}
            </svg>
        `;
    }

    buildWrapper(el: HTMLElement) {
        const wrapper = document.createElement('div');
        wrapper.setAttribute(
            'style',
            'position: absolute;width: 100%;height: 100%;z-index:-1000'
        );
        wrapper.innerHTML = this.buildSvg();
        el.appendChild(wrapper);
        return wrapper;
    }
}
