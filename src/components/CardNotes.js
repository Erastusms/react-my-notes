import React from "react";
import { showFormattedDate } from "../utils";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

export default function CardNotes({ notesData, onArchive, onDelete }) {
  return (
    <>
      {notesData.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-3 m-3">
          {notesData.map((note) => {
            return (
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title fs-5">{note.title}</h5>
                    <p className="card-text">{note.body}</p>
                  </div>
                  <div className="card-footer">
                    <div className="row justify-content-between">
                      <div className="col-8">
                        <small className="text-muted">
                          {showFormattedDate(note.createdAt)}
                        </small>
                      </div>
                      <div className="col-4 text-end">
                        {note.archived ? (
                          <UnarchiveIcon
                            role="button"
                            color="success"
                            onClick={() => onArchive(note.id)}
                          />
                        ) : (
                          <ArchiveIcon
                            role="button"
                            className="text-warning"
                            onClick={() => onArchive(note.id)}
                          />
                        )}
                        <DeleteIcon
                          className="text-danger ms-2"
                          role="button"
                          onClick={() => onDelete(note.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="row justify-content-center my-5 text-muted">Data Kosong</div>
      )}
    </>
  );
}
