import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, deleteUser } from "firebase/auth";
import { ref, set } from "firebase/database";
import db from "./FbConfig";

export default function Home() {
    const nav = useNavigate();
    const [user, setUser] = useState("");
    const [fbno, setFbno] = useState("");
    const [name, setName] = useState("");
    const [fbtext, setFbtext] = useState("");
    const [feedback, setFeedback] = useState("⭐⭐⭐⭐⭐");

    const hName = (event) => {
        setName(event.target.value);
    };
    const hFbno = (event) => {
        setFbno(event.target.value);
    };
    const hFbtxt = (event) => {
        setFbtext(event.target.value);
    };
    const hFeedback = (event) => {
        setFeedback(event.target.value);
    };
    //getting the username and storing it in local storage for later usage

    const saveAs = (event) => {
        event.preventDefault();
        if (fbno === "") alert("Feedback no cannot be empty");
        else if (name === "") {
            alert("Name cannot be empty");
        } else if (name.length < 3) {
            alert("Name shud contain atleast 3 letters");
        } else if (fbtext === "") {
            alert("Plszz write in the feedback area");
        } else {
            let data = { fbno, name, fbtext, feedback };
            let node = fbno;
            let r = ref(db, "fb/" + node);
            set(r, data);

            alert("Thank you for your feedback");
            setFbno("");
            setName("");
            setFbtext("");
            setFeedback("⭐⭐⭐⭐⭐");
        }
    };

    useEffect(() => {
        let un = localStorage.getItem("un");
        if (un != null) {
            setUser("Welcome " + un);
        } else {
            nav("/login");
        }
    }, []);

    const lo = (event) => {
        event.preventDefault();
        const ans = window.confirm("Are u Sure ❓");
        if (ans) {
            localStorage.clear();
            nav("/login");
        }
    };
    const de = (event) => {
        event.preventDefault();
        const answer = window.confirm("Are u Sure ❓ ");
        if (answer) {
            const auth = getAuth();
            const user = auth.currentUser;

            deleteUser(user)
                .then(() => {
                    localStorage.clear();
                    nav("/login");
                })
                .catch((err) => alert("Issue " + err));
        }
    };
    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=0.5"
            ></meta>
            <center>
                <NavBar />
                <h1>Home Page</h1>
                <div id="container6">
                    <h2> {user} </h2>
                    <form onSubmit={saveAs}>
                        <input
                            type="number"
                            placeholder="Feedback Number"
                            onChange={hFbno}
                            value={fbno}
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder="Enter Name"
                            onChange={hName}
                            value={name}
                        />
                        <br />
                        <br />
                        <textarea
                            placeholder="Write ur feedback here..."
                            rows={5}
                            cols={25}
                            onChange={hFbtxt}
                            value={fbtext}
                            id="txt"
                        ></textarea>
                        <br />
                        <label> Rate Us :- </label>
                        <input
                            type="radio"
                            name="r"
                            value="⭐"
                            onChange={hFeedback}
                            checked={feedback === "⭐"}
                            id="radio1"
                        />
                        ⭐
                        <input
                            type="radio"
                            name="r"
                            value="⭐⭐"
                            onChange={hFeedback}
                            checked={feedback === "⭐⭐"}
                            id="radio2"
                        />
                        ⭐⭐
                        <input
                            type="radio"
                            name="r"
                            value="⭐⭐⭐"
                            onChange={hFeedback}
                            checked={feedback === "⭐⭐⭐"}
                            id="radio3"
                        />
                        ⭐⭐⭐
                        <input
                            type="radio"
                            name="r"
                            value="⭐⭐⭐⭐"
                            onChange={hFeedback}
                            checked={feedback === "⭐⭐⭐⭐"}
                            id="radio4"
                        />
                        ⭐⭐⭐⭐
                        <input
                            type="radio"
                            name="r"
                            value="⭐⭐⭐⭐⭐"
                            defaultCheckedefault={true}
                            onChange={hFeedback}
                            checked={feedback === "⭐⭐⭐⭐⭐"}
                            id="radio5"
                        />
                        ⭐⭐⭐⭐⭐
                        <br />
                        <br />
                        <input type="submit" id="homesubbutton" />
                        <br />
                        <br />
                    </form>
                    <div id="child1">
                        <form onSubmit={lo}>
                            <input type="submit" value="Logout" id="logout" />
                        </form>
                    </div>

                    <div id="child2">
                        <form onSubmit={de}>
                            <input
                                type="submit"
                                value="Del User"
                                id="deleteuser"
                            />
                        </form>
                    </div>
                </div>
            </center>
        </>
    );
}
