const COUNTRY_CODES = `AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW`.split(" ");

const DIAL_CODES: Record<string, string> = {
  LK: "+94", GB: "+44", US: "+1", CA: "+1", AU: "+61", NZ: "+64", IN: "+91", PK: "+92", BD: "+880", AE: "+971", SA: "+966", SG: "+65", MY: "+60", DE: "+49", FR: "+33", IE: "+353", IT: "+39", ES: "+34", PT: "+351", NL: "+31", CH: "+41", AT: "+43", BE: "+32", SE: "+46", NO: "+47", DK: "+45", FI: "+358", IS: "+354", PL: "+48", CZ: "+420", HU: "+36", RO: "+40", GR: "+30", TR: "+90", IL: "+972", JP: "+81", CN: "+86", HK: "+852", KR: "+82", TH: "+66", VN: "+84", PH: "+63", ID: "+62", ZA: "+27", NG: "+234", KE: "+254", EG: "+20", BR: "+55", MX: "+52", AR: "+54", CL: "+56", CO: "+57", PE: "+51", RU: "+7",
};

const regionNames = new Intl.DisplayNames(["en-US"], { type: "region" });
const COUNTRY_NAME_OVERRIDES: Record<string, string> = {
  FK: "Falkland Islands (Islas Malvinas)",
};

export const COUNTRIES = COUNTRY_CODES
  .map((code) => ({ code, name: COUNTRY_NAME_OVERRIDES[code] || regionNames.of(code) || code, dialCode: DIAL_CODES[code] || "" }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const flagForCountry = (code: string) =>
  code.toUpperCase().replace(/./g, (letter) => String.fromCodePoint(letter.charCodeAt(0) + 127397));
