import { NgModule } from '@angular/core';
import { PrettyScrollComponent } from './components/pretty-scroll.component';
import { PrettyScrollDirective } from './directives/pretty-scroll.directive';

@NgModule({
    declarations: [PrettyScrollComponent, PrettyScrollDirective],
    imports: [],
    exports: [PrettyScrollComponent, PrettyScrollDirective],
})
export class PrettyScrollModule {}
