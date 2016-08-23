
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { INg2WizardConfig } from './ng2-wizard/ng2-wizard.config';
import { Ng2WizardTab } from './ng2-wizard/ng2-wizard-tab.component';
import { Ng2WizardStep } from './ng2-wizard/ng2-wizard-step.component';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

   public wizardConfig: INg2WizardConfig = {
        "showNavigationButtons": true,
        "navigationButtonLocation": "bottom",
        "preventUnvisitedTabNavigation": true
    };

    public onNext(): void {
        console.log("onNext");
    }

    public onPrevious(): void {
        console.log("onPrevious");
    }

    public onTabChange(): void {
        console.log("onTabChange");
    }

}
