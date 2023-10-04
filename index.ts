import resultsJson from "./logs-insights-results.json";

const counts = {};
resultsJson.forEach((result) => {
  const key = result["@log"];
  if (!counts[key]) {
    counts[key] = 1;
  } else {
    counts[key]++;
  }
});

console.log(counts);