import React from "react";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";

export default function Header() {
  return (
    <header>
      <nav className="navbar bg-success mb-3">
        <div className="container-fluid justify-content-center text-center text-white">
          <TextSnippetRoundedIcon /> MyNotes
        </div>
      </nav>
    </header>
  );
}
