import { AppDateInput } from './app-date-input';

describe('app-date-input', () => {
  it('should build', () => {
    expect(new AppDateInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppDateInputElement;

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
