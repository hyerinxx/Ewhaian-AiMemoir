import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';

import Generation from './components/generation/Main.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Generation />
  </React.StrictMode>,
)
