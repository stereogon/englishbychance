import "../styles/block.css";
import { useState } from "react";

export default function Block() {
    const [state, setState] = useState({
        hero: "Warm Welcome",
        phonetic: "",
        subhero:
            "A welcome to someone or something that is particularly enthusiastic and positive.",
    });

    const [spinner, setSpinner] = useState(false);

    const nextWord = () => {
        setSpinner(true);
        fetch(process.env.REACT_APP_API_NINJA_URL, {
            method: "GET",
            headers: {
                "X-Api-Key": process.env.REACT_APP_API_NINJA_KEY,
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let { word } = data;
                fetch(process.env.REACT_APP_API_URL + word, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        setSpinner(false);

                        setState({
                            hero: word,
                            phonetic: data[0].phonetic,
                            subhero:
                                data[0].meanings[0].definitions[0].definition,
                        });
                    })
                    .catch((err) => {
                        nextWord();
                    });
            })
            .catch((err) => {
                setState({
                    hero: "error",
                    phonetic: "/ˈɛrə/",
                    subhero: "a mistake.",
                });
            });
    };

    return (
        <>
            <div className="container">
                <div className="content">
                    <p className="hero-style">{state.hero}</p>
                    <p className="phonetic-style">{state.phonetic}</p>
                    <p className="subhero-style">{state.subhero}</p>
                    <button className="btn" onClick={() => nextWord()}>
                        Next
                    </button>
                    <center>
                        {spinner && <p className="loading-style">Loading...</p>}
                    </center>{" "}
                </div>
            </div>
        </>
    );
}
