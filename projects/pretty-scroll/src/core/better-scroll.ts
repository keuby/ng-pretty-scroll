import BScroll, { Options } from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar';
import MouseWheel from '@better-scroll/mouse-wheel';
import ObserveDom from '@better-scroll/observe-dom';
import { PrettyScroll } from './pretty-scroll';

BScroll.use(ScrollBar);
BScroll.use(MouseWheel);
BScroll.use(ObserveDom);

export class BetterScroll extends PrettyScroll<BScroll, Options> {
    _create(el: HTMLElement, config: Partial<Options>): BScroll {
        return new BScroll(el, config);
    }

    _destroy(ins: BScroll): void {
        ins.destroy();
    }

    _update(ins: BScroll): void {
        ins.refresh();
    }
}
