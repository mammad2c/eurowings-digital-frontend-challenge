/**
 * https://github.com/algolia/datasets/blob/master/airports/airports.json
 */
export default defineEventHandler(() => {
  return [
    {
      name: "Frankfurt Main",
      city: "Frankfurt",
      country: "Germany",
      iata_code: "FRA",
      id: "340",
    },
    {
      name: "Franz Josef Strauss",
      city: "Munich",
      country: "Germany",
      iata_code: "MUC",
      id: "346",
    },
    {
      name: "Dusseldorf",
      city: "Duesseldorf",
      country: "Germany",
      iata_code: "DUS",
      id: "345",
    },
    {
      name: "Tegel",
      city: "Berlin",
      country: "Germany",
      iata_code: "TXL",
      id: "351",
    },
    {
      name: "Hamburg",
      city: "Hamburg",
      country: "Germany",
      iata_code: "HAM",
      id: "342",
    },
    {
      name: "Schonefeld",
      city: "Berlin",
      country: "Germany",
      iata_code: "SXF",
      id: "337",
    },
  ];
});
