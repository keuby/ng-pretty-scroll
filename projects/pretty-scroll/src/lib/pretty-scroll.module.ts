import { NgModule } from '@angular/core';
import { PrettyScrollComponent } from './components/pretty-scroll.component';
import { PrettyScrollDirective } from './directives/pretty-scroll.directive';
import { CommonModule } from '@angular/common';
import { GraphLinkDirective } from './directives/graph-link.directive';
import { GraphLinkNodeDirective } from './directives/graph-link-node.directive';

@NgModule({
    declarations: [
        PrettyScrollComponent,
        PrettyScrollDirective,
        GraphLinkDirective,
        GraphLinkNodeDirective,
    ],
    imports: [CommonModule],
    exports: [
        PrettyScrollComponent,
        PrettyScrollDirective,
        GraphLinkDirective,
        GraphLinkNodeDirective,
    ],
})
export class PrettyScrollModule {}
