import React from 'react';
import { createRoot } from 'react-dom/client';
import MyNotes from './MyNotes';
// import style
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<MyNotes />);
