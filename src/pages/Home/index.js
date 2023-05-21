import Header from "../../components/Header";
import Login from "../Login";
import { useState } from 'react';

export default function Home() {
    const [clicked, setClicked] = useState(false);
    return (
        <div className="homePage">
            <Header setParentState={(bool) => setClicked(bool)} />
            {clicked && <Login setParentState={(bool) => setClicked(bool)} />}
        </div>
    );
}