import { PiNotebookThin } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { RiDeleteBin6Fill, RiAddCircleFill } from "react-icons/ri";
export default function Sidebar({
  onOpenAddNotePage,
  onOpenAllNotePage,
  onOpenFavoriteNotePage,
  onOpenTrashPage,
  toggleMenu,
  screenWidth,
  openAddNotePage,
  openFavoritePage,
  openTrashPage,
}) {
  return (
    <div
      className={
        toggleMenu && screenWidth < 576 ? "min-sidebar-nav" : "sidebar-div"
      }
    >
      {/* sidebar logo */}
      <h1 className="logo">
        <b className="red">.</b>
        <b className="yellow">.</b>
        <b className="green">.</b>
      </h1>
      {/* sidebar menu list */}

      <ul className="menu-list">
        <li
          className={
            !openAddNotePage && !openFavoritePage && !openTrashPage
              ? "clicked"
              : "menu-item"
          }
          onClick={onOpenAllNotePage}
        >
          <PiNotebookThin className="sidebar-icon" />
          <span>
            {!toggleMenu && screenWidth < 576
              ? null
              : toggleMenu && screenWidth < 576
              ? "All Note"
              : "All Note"}
          </span>
        </li>
        <li
          className={openAddNotePage ? "clicked" : "menu-item"}
          onClick={onOpenAddNotePage}
        >
          <FaBookmark className="sidebar-icon" />
          <span>
            {!toggleMenu && screenWidth < 576
              ? null
              : toggleMenu && screenWidth < 576
              ? "Notebook"
              : "Notebook"}
          </span>
        </li>
        <li
          className={openFavoritePage ? "clicked" : "menu-item"}
          onClick={onOpenFavoriteNotePage}
        >
          <AiFillHeart className="sidebar-icon" />
          <span>
            {!toggleMenu && screenWidth < 576
              ? null
              : toggleMenu && screenWidth < 576
              ? "Favorite"
              : "Favorite"}
          </span>
        </li>
        <li
          className={openTrashPage ? "clicked" : "menu-item"}
          onClick={onOpenTrashPage}
        >
          <RiDeleteBin6Fill className="sidebar-icon" />
          <span>
            {!toggleMenu && screenWidth < 576
              ? null
              : toggleMenu && screenWidth < 576
              ? "Trash"
              : "Trash"}
          </span>
        </li>
      </ul>

      {/* addNote icon  */}
      <div className="addNote-div">
        <RiAddCircleFill className="addNote-icon" onClick={onOpenAddNotePage} />
      </div>
    </div>
  );
}
