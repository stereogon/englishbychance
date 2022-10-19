import Logo from "./Logo";
import "../styles/footer.css";

export default function Footer() {
    return (
        <>
            <footer>
                <Logo footer={true} />
            </footer>
        </>
    );
}
