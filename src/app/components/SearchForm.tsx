"use client";
import { useState } from "react";
import FileTypeDropdown from "./FileTypeDropdown";
import EngineDropdown from "./EngineDropdown";

import { buildQuery, buildSearchUrl } from "../utils";
import { styleConstants } from "./styleConstants";

function SearchForm({
  searchEngine,
  setSearchEngine,
}: {
  searchEngine: string;
  setSearchEngine: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [query, setQuery] = useState<string>("");
  const [fileType, setFileType] = useState<string>("");
  const [resType, setResType] = useState<string>("");

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Build and execute the search URL
    const finalQuery = buildQuery(query, fileType);
    const url = buildSearchUrl(searchEngine, finalQuery, resType);
    window.open(url, "_blank");
  };
  const handleInputOnChange = (e: { target: { value: string } }) => {
    setQuery(e.target.value);
  };

  return (
    <form className={styleConstants.form.default} onSubmit={handleSearch}>
      <div className="flex flex-row">
        <FileTypeDropdown setFileType={setFileType} setResType={setResType} />
        <EngineDropdown setEngine={setSearchEngine} />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleInputOnChange}
        placeholder="Search anything"
        className={styleConstants.input.default}
      />
      <button className={styleConstants.button.default} type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchForm;
