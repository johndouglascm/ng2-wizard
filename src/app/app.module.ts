import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Wizard } from './ng2-wizard/ng2-wizard.component';
import { Ng2WizardTab } from './ng2-wizard/ng2-wizard-tab.component';
import { Ng2WizardStep } from './ng2-wizard/ng2-wizard-step.component';
import { INg2WizardConfig } from './ng2-wizard/ng2-wizard.config';

@NgModule({
  declarations: [
  AppComponent,
  Ng2Wizard,
  Ng2WizardTab,
  Ng2WizardStep
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
