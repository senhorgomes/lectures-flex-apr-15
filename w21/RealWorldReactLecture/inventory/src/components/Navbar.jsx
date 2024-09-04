import { Link } from "react-router-dom";

function Navbar() {
return(
    <nav>
        {/* <a href={"/"}>HomePage</a> */}
        <Link to={"/"}>HomePage</Link>
        <Link to={"/products"}>Products</Link>
    </nav>
);
}

export default Navbar;