import { CustomerPortalProjectPage } from './app.po';

describe('customer-portal-project App', () => {
  let page: CustomerPortalProjectPage;

  beforeEach(() => {
    page = new CustomerPortalProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
