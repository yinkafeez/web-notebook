import Sidebar from "./Sidebar";
import AllNotePageHeader from "./AllNotePageHeader";
import AddNotePageHeader from "./AddNotePageHeader";
import FavoritePageHeader from "./FavoritePageHeader";
import TrashPageHeader from "./TrashPageHeader";
import AllNotes from "./AllNotes";
import AddNotePage from "./AddNotePage";
import Favorite from "./Favorite";
import Trash from "./Trash";
import { useState } from "react";

function App() {
  // open add note page state
  const [openAddNotePage, setOpenAddNotePage] = useState(false);
  // open favorite page state
  const [openFavoritePage, setOpenFavorite] = useState(false);
  //open deleted note page state
  const [openTrashPage, setTrashPage] = useState(false);

  // side bar toggle hamburger
  const [toggleMenu, setToggleMenu] = useState(false);
  const screenWidth = window.innerWidth;

  // Notes arrray
  const [notes, setNotes] = useState([]);

  // sorting notes array to display in descending order
  const sortedNotes = notes
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  // Adding new note
  function AddNote(title, content, selected) {
    const newNote = { title, content, id: Math.random(), selected };
    setNotes([...notes, newNote]);
  }

  // handle toggle function on button click
  function handleToggle() {
    setToggleMenu((prev) => !prev);
  }

  // open add note page
  function onOpenAddNotePage() {
    setOpenAddNotePage(true);
    setOpenFavorite(false);
    setTrashPage(false);
  }

  //open all note page
  function onOpenAllNotePage() {
    setOpenAddNotePage(false);
    setOpenFavorite(false);
    setTrashPage(false);
    setToggleMenu(false);
  }

  // open favorite note page
  function onOpenFavoriteNotePage() {
    setOpenFavorite(true);
    setOpenAddNotePage(false);
    setTrashPage(false);
  }

  // open favorite note page
  function onOpenTrashPage() {
    setTrashPage(true);
    setOpenFavorite(false);
    setOpenAddNotePage(false);
  }

  return (
    <div className="App">
      {openAddNotePage ? (
        <AddNotePageHeader />
      ) : openFavoritePage ? (
        <FavoritePageHeader />
      ) : openTrashPage ? (
        <TrashPageHeader />
      ) : (
        <AllNotePageHeader />
      )}
      <div className="Note-display">
        <Sidebar
          onOpenAddNotePage={onOpenAddNotePage}
          onOpenAllNotePage={onOpenAllNotePage}
          onOpenFavoriteNotePage={onOpenFavoriteNotePage}
          onOpenTrashPage={onOpenTrashPage}
          toggleMenu={toggleMenu}
          screenWidth={screenWidth}
          openAddNotePage={openAddNotePage}
          openFavoritePage={openFavoritePage}
          openTrashPage={openTrashPage}
        />
        {openAddNotePage ? (
          <AddNotePage
            handleToggle={handleToggle}
            toggleMenu={toggleMenu}
            screenWidth={screenWidth}
            AddNote={AddNote}
            setOpenAddNotePage={setOpenAddNotePage}
          />
        ) : openFavoritePage ? (
          <Favorite sortedNotes={sortedNotes} notes={notes} />
        ) : openTrashPage ? (
          <Trash sortedNotes={sortedNotes} notes={notes} setNotes={setNotes} />
        ) : (
          <AllNotes
            handleToggle={handleToggle}
            toggleMenu={toggleMenu}
            sortedNotes={sortedNotes}
            notes={notes}
            setNotes={setNotes}
          />
        )}
      </div>
    </div>
  );
}

export default App;
