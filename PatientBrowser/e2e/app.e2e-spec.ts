import { PatientBrowserPage } from './app.po';

describe('patient-browser App', () => {
  let page: PatientBrowserPage;

  beforeEach(() => {
    page = new PatientBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
