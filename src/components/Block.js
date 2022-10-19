import "../styles/block.css";

export default function Block(props) {
    return (
        <>
            <div className="container">
                <div className="content">
                    <p className="hero-style">When the Rubber Hits the Road</p>
                    <p className="subhero-style">
                        When something is about to begin, get serious, or put to
                        the test.
                    </p>
                    <button className="btn">Next</button>
                </div>
            </div>
        </>
    );
}
