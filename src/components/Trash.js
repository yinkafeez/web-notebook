import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";
export default function Trash({ sortedNotes, notes, setNotes }) {
  const [selectedNote, setSelectedNote] = useState();

  // open note option
  function onOpenSelectedNote(i) {
    setSelectedNote(selectedNote === i ? null : i);
  }

  //move note  to trash
  function onDelete(id) {
    //delete note permanently
    const removeItem = notes.filter((note) => note.id !== id);
    setNotes(removeItem);
  }

  // getting the lenght of objects that has selected value = 3
  const selectedItems = notes.filter((note) => note.selected === 3);
  const lengthOfSelectedItems = selectedItems.length;

  // delete all notes in the trash at ones
  function handleDeleteAllNotes() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all notes"
    );
    if (confirmed) {
      // lengthOfSelectedItems === 0;
      const removeItem = notes.filter((note) => note.selected !== 3);
      setNotes(removeItem);
    }
  }

  return (
    <div className="trash-container">
      <div className="trash-title-container">
        <h3>TRASH</h3>
        <div className="trash-icon-div">
          <hr />
        </div>
      </div>

      {/* check if objects that has selected = 3 length is 0 */}
      {!lengthOfSelectedItems ? (
        <p className="empty-note" style={{ marginTop: "2rem" }}>
          No note in the trash
        </p>
      ) : (
        <>
          {/* display notes added to  trash  */}
          <div className="trashed-note-display-container">
            {sortedNotes.map((note, i) => {
              return (
                note.selected === 3 && (
                  <div className="note-display" key={i}>
                    <h3>{note.title}</h3>

                    {/* note option button */}
                    <div
                      className="note-button-and-option-div"
                      onClick={() => onOpenSelectedNote(i)}
                    >
                      <h3>...</h3>

                      {/* note option to display */}
                      {selectedNote === i && (
                        <div
                          className="note-option-div"
                          style={{
                            height: "40px",
                            paddingTop: "5px",
                            paddingLeft: "20px",
                            width: "120px",
                          }}
                        >
                          <p onClick={() => onDelete(note.id)}>
                            <RiDeleteBin6Fill style={{ marginRight: "8px" }} />
                            Delete
                          </p>
                        </div>
                      )}
                    </div>

                    <p>{note.content}</p>
                  </div>
                )
              );
            })}
          </div>
        </>
      )}

      {/* delete all notes in trash at once */}
      {lengthOfSelectedItems > 0 && (
        <div
          style={{
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <button
            onClick={handleDeleteAllNotes}
            style={{
              margin: "0 auto",
              textAlign: "center",
              border: "none",
              padding: "10px",
              fontWeight: "600",
            }}
          >
            Delete all
          </button>
        </div>
      )}
    </div>
  );
}
