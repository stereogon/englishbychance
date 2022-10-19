import "../styles/logo.css";

export default function Logo(props) {
    let isFooter = props.footer;
    return (
        <>
            <p className={isFooter ? "logo-style-footer" : "logo-style"}>
                english<span>by</span>chance
            </p>
        </>
    );
}
