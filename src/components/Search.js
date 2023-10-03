import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
export default function Search(notes, setNotes) {
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [searchText, setSearchText] = useState("");
  // submision of search input
  function onSubmit(e) {
    e.preventDefault();
    setOpenSearchInput(false);

    // const filteredNotes = notes.filter((note) =>
    //   note.title.toLowerCase().includes(searchText.toLowerCase())
    // );
    // setNotes(filteredNotes);
    // show searched word
    // setNotes((prev) =>
    //   prev.filter(
    //     (note) => note.title === searchText || note.content === searchText
    //   )
    // );
  }

  const width = window.innerWidth;
  return (
    <form className={"search-input-form"} onSubmit={onSubmit}>
      {!openSearchInput && width < 577 ? (
        <AiOutlineSearch
          style={{ color: "#fff", width: "25px", height: "25px" }}
          onClick={() => setOpenSearchInput(true)}
          className="search-icon"
        />
      ) : (
        <div className="search-input">
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="&#61442; Search.."
          />
        </div>
      )}
    </form>
  );
}
// &#61442;
