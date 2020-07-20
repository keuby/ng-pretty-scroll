import { merge } from '../shared/util';

export abstract class PrettyScroll<T, P> {
    constructor(root: HTMLElement | string, config: Partial<P> = {}) {
        if (root instanceof HTMLElement) {
            this.root = root;
        } else {
            this.root = document.querySelector(root);
        }

        this.setConfig(config);
    }

    private started = false;

    private root: HTMLElement;

    private container: HTMLElement;

    private selector: string;

    private instance: T;

    private config: Partial<P> = {};

    setConfig(config: Partial<P>) {
        this.config = merge(this.config, config);
    }

    start(selector?: string) {
        if (selector !== undefined) {
            this.selector = selector;
        } else {
            selector = this.selector;
        }

        if (this.started) {
            this.stop();
        }

        this.container = this.queryContainer(this.root, selector);

        if (this.container != null) {
            this.instance = this._create(this.container, this.config);
        }

        this.started = true;
    }

    stop() {
        if (this.instance != null) {
            this._destroy(this.instance);
            this.instance = null;
        }
        this.container = null;
        this.started = false;
    }

    update() {
        if (!this.started) {
            return;
        }

        if (this.instance == null) {
            this.start();
        }

        if (this.instance != null) {
            this._update(this.instance);
        }
    }

    protected queryContainer(root: HTMLElement, selector?: string) {
        if (selector == null) {
            return root;
        } else if (selector === 'parent') {
            return root.parentElement;
        } else {
            return root.querySelector(selector) as HTMLElement;
        }
    }

    abstract _create(el: HTMLElement, config: Partial<P>): T;
    abstract _destroy(ins: T): void;
    abstract _update(ins: T): void;
}
