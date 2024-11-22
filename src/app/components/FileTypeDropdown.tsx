"use client";
import { styleConstants } from "./styleConstants";

function FileTypeDropdown({
  setFileType,
  setResType,
}: {
  setFileType: (value: string) => void;
  setResType: (value: string) => void;
}) {
  const fileTypes = [
    {
      label: "TV/Movies",
      value: "mkv|mp4|avi|mov|mpg|wmv|divx|mpeg",
      resType: "video",
    },
    { label: "Books", value: "MOBI|CBZ|CBR|PDF|EPUB", resType: "ebook" },
    { label: "Music", value: "mp3|wav|flac|ogg", resType: "audio" },
    {
      label: "Software/Games",
      value: "exe|iso|dmg|tar|rar|zip",
      resType: "archive",
    },
    { label: "Images", value: "jpg|png|bmp|gif", resType: "picture" },
    { label: "Other", value: "", resType: "all" },
  ];

  const handleChange = (e: { target: { value: string } }) => {
    const selected = fileTypes.find((type) => type.value === e.target.value);
    if (!selected) {
      alert("Invalid file type");
      return;
    }

    setFileType(selected.value);
    setResType(selected.resType);
  };

  return (
    <select className={styleConstants.dropDown.default} onChange={handleChange}>
      {fileTypes.map((type: { label: string; value: string }) => (
        <option key={type.label} value={type.value}>
          {type.label}
        </option>
      ))}
    </select>
  );
}
export default FileTypeDropdown;
