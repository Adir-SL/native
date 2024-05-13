import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";

const App = () => {
    return (
        <div>
            <h1>HELLO</h1>
            <h3>React Native</h3>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);