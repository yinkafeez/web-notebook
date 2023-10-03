import { BiSave } from "react-icons/bi";
import { BsFillPinAngleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
export default function AddNotePage({
  handleToggle,
  toggleMenu,
  screenWidth,
  AddNote,
  setOpenAddNotePage,
}) {
  //   open add note option state
  const [openAddNoteOption, setOpenAddNoteOption] = useState(false);

  //   open add note option function
  function onOpenAddNoteOption() {
    setOpenAddNoteOption((prev) => !prev);
  }

  // pin note function
  function onPinNote() {
    if (!title || !content) {
      alert("please complete the form");
    } else {
      // close add note option
      setOpenAddNoteOption(false);

      // close add note page and display all note page
      setOpenAddNotePage(false);

      // add note, set selected to 0 to add note to pinned note
      AddNote(title, content, 0);
    }
  }

  // save note function
  function onSaveNote() {
    if (!title || !content) {
      alert("please complete the form");
    } else {
      // close add note option
      setOpenAddNoteOption(false);

      // close add note page and display all note page
      setOpenAddNotePage(false);

      // add note, set selected to 1 to add note to other note
      AddNote(title, content, 1);
    }
  }

  // add note input state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="add-note-page">
      <div className="add-note-page-title-div">
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
        <h2>ADD NEW NOTE</h2>
      </div>
      <form className="add-note-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title"
        />
        <textarea
          className="add-note-text-area"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={
            screenWidth < 576
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit..."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus, mi integer sed facilisis maecenas."
          }
        ></textarea>
        <div className="add-note-option-container">
          {/* note option button */}
          <h3 onClick={onOpenAddNoteOption}>...</h3>

          {/* display add note option on button click */}
          {openAddNoteOption && (
            <div className="add-note-option">
              <p onClick={onSaveNote}>
                <BiSave style={{ marginRight: "12px" }} /> Save
              </p>
              <p onClick={onPinNote}>
                <BsFillPinAngleFill
                  style={{ color: "#fff", marginRight: "12px" }}
                />
                Pin Note
              </p>
            </div>
          )}
        </div>
      </form>
      <div className="add-note-page-footer"></div>
    </div>
  );
}
