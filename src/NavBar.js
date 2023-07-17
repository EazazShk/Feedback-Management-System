import { Link } from "react-router-dom";

export default function NavBar() {
    const un = localStorage.getItem("un");

    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=0.7"
            ></meta>
            <center>
                <div className="nav">
                    {un == null && <Link to="/login"> Login</Link>}
                    {un == null && <Link to="/signup"> Signup</Link>}
                    {un == null && <Link to="/admin"> Admin</Link>}
                    {un == null && <Link to="/fp"> ForgotPassword</Link>}
                    {un != null && <Link to="/"> Home</Link>}
                    {un != null && <Link to="/about"> About</Link>}
                    {un != null && <Link to="/cp"> Change Password</Link>}
                </div>
            </center>
        </>
    );
}
