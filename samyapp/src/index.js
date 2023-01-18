import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/layout/layout.component";
import "./main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>
);