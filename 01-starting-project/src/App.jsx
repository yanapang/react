import {CORE_CONCEPTS} from './data';
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        {/*
                            shorter version. if the data given has same name,
                            prop values can be used like this.
                            and this is how to use documentation in jsx :)
                        */}
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
