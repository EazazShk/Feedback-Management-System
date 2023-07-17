import NavBar from "./NavBar";

export default function About() {
    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=0.6"
            ></meta>
            <center>
                <NavBar />
                <h1>About Page </h1>
                <div id="AbContainer">
                    <p>Hello this project was made by Eazaz Shaikh.</p>
                    <p>
                        Using ReactJs And firebase for Authentication/Realtime
                        Database for Storage.
                    </p>
                </div>
            </center>
        </>
    );
}
