
// in iso format but in locale timezone
export function getCurrentDateTime() {
  return new Date().toLocaleString('sv').replace(' ', 'T');
}

// in YYYY-MM-DD format
export function getCurrentDate() {
  return new Date().toLocaleDateString('en-CA');
}

export function getTime(isoDt) {
  let date = new Date(isoDt);
  let settings = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleString('en-US', settings);
}
