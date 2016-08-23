import { Ng2WizardPage } from './app.po';

describe('ng2-wizard App', function() {
  let page: Ng2WizardPage;

  beforeEach(() => {
    page = new Ng2WizardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
