import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { getAuth, updatePassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import app from "./FbConfig";

export default function ChangePassword() {
    useEffect(() => {
        let un = localStorage.getItem("un");
        if (un == null) {
            nav("/login");
        }
    }, []);

    const nav = useNavigate();
    const [pw1, setPw1] = useState("");
    const [pw2, setPw2] = useState("");

    const hPw1 = (event) => {
        setPw1(event.target.value);
    };
    const hPw2 = (event) => {
        setPw2(event.target.value);
    };

    const save = (event) => {
        event.preventDefault();
        const ans = window.confirm(
            "Are u sure u want to change the password ❓"
        );
        if (ans) {
            if (pw1 === "") {
                alert("New Password cannot be empty!");
            } else if (pw2 === "") {
                alert("Confirm Password cannot be empty!");
            } else if (pw1 === pw2) {
                const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                    updatePassword(user, pw1)
                        .then((res) => {
                            localStorage.clear();
                            alert("Password Changed Succesfully");
                            nav("/login");
                        })
                        .catch((err) => alert("Issue " + err));
                });
            } else {
                alert("Passwords did not match");
                setPw1("");
                setPw2("");
            }
        } else {
            setPw1("");
            setPw2("");
        }
    };
    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            ></meta>
            <center>
                <NavBar />
                <h1> ChangePasword Page </h1>

                <div id="container7">
                    <form onSubmit={save}>
                        <input
                            type="password"
                            placeholder="Enter New Password"
                            onChange={hPw1}
                            value={pw1}
                        />
                        <br />
                        <br />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            onChange={hPw2}
                            value={pw2}
                        />
                        <br />
                        <br />
                        <input
                            id="CPassbutton"
                            type="submit"
                            value="ChangePass"
                        />
                        <br />
                        <br />
                    </form>
                </div>
            </center>
        </>
    );
}
