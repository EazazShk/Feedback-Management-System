import { useState, useEffect } from "react";
import { onValue, ref, remove } from "firebase/database";
import db from "./FbConfig";

//import firebase from "firebase";

export default function AdminPage() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState("");
    useEffect(() => {
        const databaseRef = ref(db, "fb");
        onValue(databaseRef, (snapshot) => {
            const fetchedData = snapshot.val();
            if (fetchedData) {
                const dataArray = Object.keys(fetchedData).map((key) => ({
                    ...fetchedData[key],
                    fbno: key,
                }));
                setData(dataArray);
            }
        });
    }, []);

    useEffect(() => {
        let un = localStorage.getItem("un");
        if (un != null) {
            setUser("Welcome Admin " + un);
        } else {
            window.location.href = "/loginpage/";
        }
    }, []);

    const handleDeleteFeedback = (fbno) => {
        const feedbackRef = ref(db, `fb/${fbno}`);
        remove(feedbackRef)
            .then(() => {
                // console.log("Feedback deleted successfully.");
                alert("Feedback Deleted Successfully");
            })
            .catch((error) => {
                console.error("Error deleting feedback:", error);
            });
    };

    const lo = (event) => {
        event.preventDefault();
        const ans = window.confirm("Are u sure ❓");
        if (ans) {
            localStorage.clear();
            window.location.href = "/loginpage/";
        }
    };
    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=0.6"
            ></meta>
            <center>
                <h1> Admin Page </h1>
                <h2>Feedback Application</h2>
                <div id="container1">
                    <h1> {user}</h1>
                    <table border={4} style={{ width: "auto" }}>
                        <tr>
                            <th>Fb No </th>
                            <th>Name </th>
                            <th>Feedback Text </th>
                            <th>Feedback </th>
                            <th>Delete</th>
                        </tr>
                        {data.map((item) => (
                            <tr key={item.fbno} style={{ textAlign: "center" }}>
                                <td>{item.fbno}</td>
                                <td>{item.name}</td>
                                <td>{item.fbtext}</td>
                                <td>{item.feedback}</td>
                                <td>
                                    <button
                                        id="deletebutton"
                                        onClick={() => {
                                            if (window.confirm("Are u sure ❓"))
                                                handleDeleteFeedback(item.fbno);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <br />

                    <form onSubmit={lo}>
                        <input type="submit" value="Logout" id="logout" />
                    </form>
                </div>
            </center>
        </>
    );
}
