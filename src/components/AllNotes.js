import OtherNotes from "./OtherNotes";
import PinnedNotes from "./PinnedNotes";
import Search from "./Search";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";

// import { AiOutlineSearch } from "react-icons/ai";
export default function AllNotes({
  handleToggle,
  toggleMenu,
  sortedNotes,
  notes,
  setNotes,
}) {
  return (
    <div className="all-notes">
      <div className="all-note-title-div">
        <div className="hamburger-btn-container">
          <button onClick={handleToggle} className="btn">
            {toggleMenu ? (
              <MdClose
                style={{ color: "#fff", width: "25px", height: "25px" }}
              />
            ) : (
              <HiMenuAlt2
                style={{ color: "#fff", width: "25px", height: "25px" }}
              />
            )}
          </button>
        </div>

        <h3>All Notes</h3>

        <Search sortedNotes={sortedNotes} setNotes={setNotes} />
      </div>
      <PinnedNotes sortedNotes={sortedNotes} notes={notes} />
      <OtherNotes sortedNotes={sortedNotes} notes={notes} />
    </div>
  );
}
