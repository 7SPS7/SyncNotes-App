import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoCopy } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { removeFromPastes } from "./Redux/PasteSlice";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Paste = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const pastes = useSelector((state) => state.paste.pastes);

  // Filter pastes based on search term
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function deletePage(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function copyToClipboard(content) {
    navigator.clipboard.writeText(content);
    toast.success("Copied to Clipboard!");
  }

  function sharePaste(pasteId) {
    const shareableLink = `${window.location.origin}/pastes/${pasteId}`;
    navigator.clipboard.writeText(shareableLink);
    toast.success("Link Copied! Share it.");
  }
  
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  return (
    <div className="mt-30 flex flex-col items-center">
      {/* Search Bar */}
      <div className="rounded-4xl w-[80%] border mb-5">
        <input
          type="search"
          className="w-[100%] p-4 text-lg font-semibold focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Notes by Title"
        />
      </div>

      {/* Display Pastes */}
      <div className="flex flex-col gap-5 w-[80%] min-h-screen mb-10">
        {filteredPastes.length > 0 ? (
          filteredPastes.map((paste) => (
            <div key={paste._id} className="border rounded-4xl bg-neutral-900 p-5">
              <div className="w-[100%] p-4 text-lg font-semibold">
                {paste.title}
                <div className="mt-5 mb-5 flex items-center justify-end gap-2 flex-wrap">
                  <button className="text-sm">
                    <NavLink to={`/pastes/${paste?._id}`}
                    onClick={handleNavLinkClick}>
                      <FaRegEye />
                    </NavLink>
                  </button>
                  <button className="text-sm">
                    <NavLink to={`/update/${paste?._id}`}
                    onClick={handleNavLinkClick}
                    >
                      <MdEdit />
                    </NavLink>
                  </button>
                  <button className="text-sm" onClick={() => deletePage(paste?._id)}>
                    <MdDelete />
                  </button>
                  <button className="text-sm" onClick={() => copyToClipboard(paste.content)}>
                    <IoCopy />
                  </button>
                  <button className="text-sm" onClick={() => sharePaste(paste._id)}>
                    <FaShareAlt />
                  </button>
                </div>
              </div>
              <div className="text-md bg-neutral-900">
                {paste.content}
                <div className="text-xs text-blue-700 my-2">{paste.createdAt}</div>
              </div>
            </div>
          ))
        ) : searchTerm ? (
          <p className="text-center text-gray-500 text-lg">
            No results found for "<strong>{searchTerm}</strong>"
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Paste;
