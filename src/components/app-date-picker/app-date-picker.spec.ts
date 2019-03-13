import { AppDatePicker } from './app-date-picker';

describe('app-date-picker', () => {
  it('should build', () => {
    expect(new AppDatePicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppDatePickerElement;

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
