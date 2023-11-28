import React from "react";
import CardNotes from "./CardNotes";

export default function ListNotes({ data, onArchive, onDelete }) {
  const archivedNotes = [];
  const activeNotes = [];
  data.map((notes) => {
    return notes.archived ? archivedNotes.push(notes) : activeNotes.push(notes);
  });

  return (
    <div className="container">
      <div className="row m-2 title-card">Catatan Aktif</div>
      <CardNotes
        notesData={activeNotes}
        onArchive={onArchive}
        onDelete={onDelete}
      />
      <div className="row m-2 title-card">Catatan Diarsipkan</div>
      <CardNotes
        notesData={archivedNotes}
        onArchive={onArchive}
        onDelete={onDelete}
      />
    </div>
  );
}
