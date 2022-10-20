import "../styles/block.css";
import { useState } from "react";

export default function Block() {
    const [state, setState] = useState({
        hero: "Warm Welcome",
        phonetic: "",
        subhero:
            "A welcome to someone or something that is particularly enthusiastic and positive.",
    });

    const nextWord = async () => {
        const { word } = await fetch(process.env.REACT_APP_API_NINJA_URL, {
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
                return data;
            })
            .catch((err) => {
                return {
                    word: "error",
                };
            });

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
                console.log(data);
                setState({
                    hero: word,
                    phonetic: data[0].phonetic,
                    subhero: data[0].meanings[0].definitions[0].definition,
                });
            })
            .catch((err) => {});
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
                </div>
            </div>
        </>
    );
}
