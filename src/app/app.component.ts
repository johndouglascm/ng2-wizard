
import { Component } from '@angular/core';
import { INg2WizardConfig } from './ng2-wizard/ng2-wizard.config';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app works!';

   public wizardConfig: INg2WizardConfig = {
        'showNavigationButtons': true,
        'navigationButtonLocation': 'bottom',
        'preventUnvisitedTabNavigation': true
    };

    public onNext(): void {
        console.log('onNext');
    }

    public onPrevious(): void {
        console.log('onPrevious');
    }

    public onTabChange(): void {
        console.log('onTabChange');
    }

}
