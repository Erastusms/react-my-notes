import React from "react";
import FormNotes from "./components/FormNotes";

import Header from "./components/Header";
import ListNotes from "./components/ListNotes";
import SearchBox from "./components/SearchBox";
import { getInitialData, getFilteredNotes } from "./utils";

class MyNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchValue: "",
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        searchValue: event.target.value,
      };
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) note.archived = !note.archived;
      return note;
    });
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(contact => contact.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler(newNote) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote],
      };
    });
  }

  render() {
    return (
      <>
        <Header />
        <FormNotes onAddNotes={this.onAddNoteHandler} />
        <SearchBox value={this.state.search} onChange={this.onSearchHandler} />
        <ListNotes
          data={getFilteredNotes(this.state.notes, this.state.searchValue)}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        ></ListNotes>
      </>
    );
  }
}

export default MyNotes;
