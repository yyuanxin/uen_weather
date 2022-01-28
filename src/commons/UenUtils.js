var currentYear = new Date().getFullYear();

var businessRegex = new RegExp("[0-9]{8}[A-Z]{1}");
var localRegex = new RegExp("[0-9]{9}[A-Z]{1}");
var otherRegex = new RegExp("T[0-9]{2}[A-Z]{2}[0-9]{4}[A-Z]{1}");

const pqList = new Set([
  "LP", "LL", "FC", "PF",
  "RF", "MQ", "MM", "NB",
  "CC", "CS", "MB", "FM",
  "GS", "DP", "CP", "NR",
  "CM", "CD", "MD", "HS",
  "VH", "CH", "MH", "CL",
  "XL", "CX", "HC", "RP",
  "TU", "TC", "FB", "FN",
  "PA", "PB", "SS", "MC",
  "SM", "GA", "GB"
]);

export function isValidUen(uen) {
  if (uen.length > 10 || uen.length < 9) return false;
  return isBusinessUen(uen)|| isLocalUen(uen) ||
    isOtherUen(uen);
}

function isBusinessUen(uen) {
  return businessRegex.test(uen);
}

function isLocalUen(uen) {
  if (localRegex.test(uen)) {
    let year = parseInt(uen.slice(0, 5));
    if ((year >= 1900) && (year <= currentYear)) {
      return true;
    }
  }
  return false;
}

function isOtherUen(uen) {
  if (otherRegex.test(uen)) {
    let refYear = parseInt(currentYear.toString().substr(-2));
    let year = parseInt(uen.slice(1,3));
    let pq = uen.slice(3,5);
    if (year <= refYear && checkPQ(pq)) {
      return true;
    }
  }
  return false;
}

function checkPQ(pq) {
  return pqList.has(pq);
}
