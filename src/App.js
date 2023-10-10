import { Header } from "./components";
import { About, Projects, Contact } from "./sections";
import ScrollSpy from "react-ui-scrollspy";

function App() {
    return (
        <>
            <Header />
            <ScrollSpy>
                <About />
                <Projects />
                <Contact />
            </ScrollSpy>
        </>
    );
}

export default App;