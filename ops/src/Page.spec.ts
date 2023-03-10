import {Page, Name} from './Page';

test('Page', () => {
  expect(typeof Page).toBe("function");
  expect(Name()).toBe("Page");
});
