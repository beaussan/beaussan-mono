import { formatRFC3339, parse } from 'date-fns';

export function formatHasuraDate(date: Date): string {
  return formatRFC3339(date);
}

export function parseHasuraDate(date: string): Date {
  return parse(date, "yyyy-MM-dd'T'HH:mm:ssXXX", new Date());
}
