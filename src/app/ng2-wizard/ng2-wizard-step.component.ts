import { Component, Input, Host } from '@angular/core';
import { Ng2WizardTab } from './ng2-wizard-tab.component';

@Component({
    selector: 'ng2-wizard-step',
    templateUrl: './ng2-wizard-step.component.html'
})
export class Ng2WizardStep {
    @Input()
    public title: string = '';
    
    public active: boolean = false;
    public visited: boolean = false;
}