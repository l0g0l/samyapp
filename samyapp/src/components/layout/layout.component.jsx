import { Header } from "./header/header.component";
import { Footer } from "./footer/footer.component";

export const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>

            <main></main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};
