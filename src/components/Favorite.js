import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";
export default function Favorite({ notes, sortedNotes }) {
  const [selectedNote, setSelectedNote] = useState();

  // open note option
  function onOpenSelectedNote(i) {
    setSelectedNote(selectedNote === i ? null : i);
  }

  //move note  to trash
  function onMoveToTrash(i) {
    // selected = 2 to add note to favorite favorite
    sortedNotes[i].selected = 3;
  }

  // getting the lenght of objects that has selected value = 2
  const selectedItems = notes.filter((note) => note.selected === 2);
  const lengthOfSelectedItems = selectedItems.length;

  return (
    <div className="favorite-notes">
      <div className="favorite-title-container">
        <h3>FAVORITE NOTES</h3>
        <div className="favorite-note-icon-div">
          <hr />
        </div>
      </div>

      {/* check if objects that has selected = 2 length is 0 */}
      {!lengthOfSelectedItems ? (
        <p className="empty-note" style={{ marginTop: "2rem" }}>
          No favorite note to display
        </p>
      ) : (
        <>
          {/* display favorite notes */}
          <div className="favorite-note-display-container">
            {sortedNotes.map((note, i) => {
              return (
                note.selected === 2 && (
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
                          style={{ height: "40px", paddingTop: "5px" }}
                        >
                          <p onClick={() => onMoveToTrash(i)}>
                            <RiDeleteBin6Fill style={{ marginRight: "8px" }} />
                            Move to trash
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
    </div>
  );
}
