const CURRENCY_FORMATTER = new Intl.NumberFormat("pl-PL", { currency: "PLN", style: "currency" });
const NUMBER_FORMATTER = new Intl.NumberFormat("pl-PL");
const DATE_TIME_FORMATTER = new Intl.DateTimeFormat("pl", { dateStyle: "medium", timeStyle: "short" });
const DATE_FORMATTER = new Intl.DateTimeFormat("pl", { dateStyle: "medium" });

// Format the price from cents to dollars using usd currency
export const formatCurrency = (priceInCents: number) => CURRENCY_FORMATTER.format(priceInCents / 100);

export const formatNumber = (number: number) => NUMBER_FORMATTER.format(number);
export const formatDateTime = (date: Date | string) => DATE_TIME_FORMATTER.format(typeof date === "string" ? new Date(date) : date);
export const formatDate = (date: Date | string) => DATE_FORMATTER.format(typeof date === "string" ? new Date(date) : date);

export function convertLocalDateToUTCIgnoringTimezone(locDate: Date) {
  const timestamp = Date.UTC(
    locDate.getFullYear(),
    locDate.getMonth(),
    locDate.getDate(),
    locDate.getHours(),
    locDate.getMinutes(),
    locDate.getSeconds(),
    locDate.getMilliseconds(),
  );

  return new Date(timestamp);
}

export function convertUTCToLocalDateIgnoringTimezone(utcDate: Date) {
  return new Date(
    utcDate.getUTCFullYear(),
    utcDate.getUTCMonth(),
    utcDate.getUTCDate(),
    utcDate.getUTCHours(),
    utcDate.getUTCMinutes(),
    utcDate.getUTCSeconds(),
    utcDate.getUTCMilliseconds(),
  );
}
