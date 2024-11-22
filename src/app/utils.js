export function buildQuery(query, fileType) {
  const baseQuery = query || "";
  const fileTypeFilter = fileType ? ` +(${fileType})` : "";
  const exclusion = " -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)";
  const intitle = " intitle:index.of";
  const additionalExclusion =
    " -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)";
  return baseQuery + fileTypeFilter + exclusion + intitle + additionalExclusion;
}

export function buildSearchUrl(engine, finalQuery, resType) {
  switch (engine) {
    case "google":
      return `https://www.google.com/search?q=${encodeURIComponent(
        finalQuery
      )}`;
    case "startpage":
      return `https://www.startpage.com/do/dsearch?query=${encodeURIComponent(
        finalQuery
      )}`;
    case "searx":
      return `https://searx.me/?q=${encodeURIComponent(finalQuery)}`;
    case "filepursuit":
      return `https://filepursuit.com/search/${encodeURIComponent(
        finalQuery
      )}/type/${resType}`;
    default:
      return `https://www.google.com/search?q=${encodeURIComponent(
        finalQuery
      )}`;
  }
}
