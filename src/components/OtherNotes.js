import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function OtherNotes({ notes, sortedNotes }) {
  const [selectedNote, setSelectedNote] = useState();

  // open note option
  function onOpenSelectedNote(i) {
    setSelectedNote(selectedNote === i ? null : i);
  }

  //add note to favorite
  function onAddToFavorite(i) {
    // selected = 2 to add note to favorite
    sortedNotes[i].selected = 2;
  }

  //move note  to trash
  function onMoveToTrash(i) {
    // selected = 2 to move note to trash
    sortedNotes[i].selected = 3;
  }

  // getting the lenght of objects that has selected value = 1
  const selectedItems = notes.filter((note) => note.selected === 1);
  const lengthOfSelectedItems = selectedItems.length;

  return (
    <div>
      <div className="other-note">
        <h3>OTHER NOTES</h3>
        <div className="other-note-icon-div">
          <hr />
        </div>
      </div>

      {/* check if objects that has selected = 1 length is 0 */}
      <div className="other-note-display-container">
        {!lengthOfSelectedItems ? (
          <p className="empty-note">No note to display</p>
        ) : (
          <>
            {/* display other notes */}
            {sortedNotes.map((note, i) => {
              return (
                <React.Fragment key={i}>
                  {note.selected === 1 && (
                    <div className="note-display">
                      <h3>{note.title}</h3>

                      {/* note option button */}
                      <div
                        className="note-button-and-option-div"
                        onClick={() => onOpenSelectedNote(i)}
                      >
                        <h3>...</h3>

                        {/* note option to display */}
                        {selectedNote === i && (
                          <div className="note-option-div">
                            <p onClick={() => onAddToFavorite(i)}>
                              <AiFillHeart style={{ marginRight: "8px" }} />
                              Favorite
                            </p>
                            <p onClick={() => onMoveToTrash(i)}>
                              <RiDeleteBin6Fill
                                style={{ marginRight: "8px" }}
                              />
                              Move to trash
                            </p>
                          </div>
                        )}
                      </div>

                      <p>{note.content}</p>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
