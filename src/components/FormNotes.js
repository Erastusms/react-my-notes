import React, { useState } from "react";

export default function FormNotes({ onAddNotes }) {
  const limitChar = 50;
  const [form, setForm] = useState({
    id: +new Date(),
    title: "",
    body: "",
    archived: false,
    createdAt: +new Date(),
  });

  const onSubmitEventHandler = (form) => {
    onAddNotes(form);
    setForm({ title: "", body: "", archived: false });
  };

  return (
    <div className="note-editor">
      <small className="text-end text-muted">
        Sisa karakter: {limitChar - form.title.length}
      </small>
      <input
        type="text"
        className="inputarea border-bottom"
        value={form.title}
        placeholder="Enter your title"
        onChange={(e) =>
          setForm({ ...form, title: e.target.value.slice(0, limitChar) })
        }
      />
      <textarea
        placeholder="Enter your note here..."
        rows={5}
        className="inputarea"
        value={form.body}
        onChange={(e) => setForm({ ...form, body: e.target.value })}
      />
      <div className="row justify-content-between">
        <div className="col-8 px-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              checked={form.archived}
              onChange={(e) => setForm({ ...form, archived: e.target.checked })}
            />
            <small className="form-check-label">Archived</small>
          </div>
        </div>
        <div className="col-4 text-end">
          <button
            className="add-button"
            onClick={() => onSubmitEventHandler(form)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
