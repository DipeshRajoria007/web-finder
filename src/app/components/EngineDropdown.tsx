import { styleConstants } from "./styleConstants";

function EngineDropdown({
  setEngine,
}: {
  setEngine: (engine: string) => void;
}) {
  const engines = ["google", "startpage", "searx", "filepursuit"];

  return (
    <select
      className={styleConstants.dropDown.default}
      onChange={(e) => setEngine(e.target.value)}
    >
      {engines.map((engine) => (
        <option key={engine} value={engine}>
          {engine.charAt(0).toUpperCase() + engine.slice(1)}
        </option>
      ))}
    </select>
  );
}
export default EngineDropdown;
