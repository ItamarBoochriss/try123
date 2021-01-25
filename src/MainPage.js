import {NavLink} from "react-router-dom";

function MainPage() {
    return (
        <div>
            <h1>This is the main page</h1>
            <br/>
            <NavLink to={"/equation"}>go to Equation</NavLink>
            <br/>
            <NavLink to={"/triangle"}>go to Triangle</NavLink>
            <br/>
            <NavLink to={"/pitagoras"}>go to Pitagoras</NavLink>
        </div>
    )
}

export default MainPage;