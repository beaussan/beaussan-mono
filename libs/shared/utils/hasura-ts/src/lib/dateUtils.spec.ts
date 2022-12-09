import { formatHasuraDate, parseHasuraDate } from './dateUtils';
import { set } from 'date-fns';

const exampleDate = set(new Date(), {
  year: 2022,
  month: 2,
  date: 3,
  hours: 9,
  minutes: 29,
  seconds: 40,
  milliseconds: 392,
});

describe('formatHasuraDate', () => {
  it('should format the date in the correct format', () => {
    expect(formatHasuraDate(exampleDate)).toEqual('2022-03-03T09:29:40+01:00');
  });
});

describe('parseHasuraDate', () => {
  it('should parse the date from hasura to have the same value', () => {
    expect(parseHasuraDate(formatHasuraDate(exampleDate))).toEqual(
      set(exampleDate, { milliseconds: 0 })
    );
  });
});
