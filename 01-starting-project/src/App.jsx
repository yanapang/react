import {useState}  from "react";
import {CORE_CONCEPTS} from './data';
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('Please Click Buttons.')
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }

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
                        {/*
                            shorter version. if the data given has same name,
                            prop values can be used like this.
                            and this is how to use documentation in jsx :)
                        */}
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect(CORE_CONCEPTS[0].title)}>{CORE_CONCEPTS[0].title}</TabButton>
                        <TabButton onSelect={() => handleSelect(CORE_CONCEPTS[1].title)}>{CORE_CONCEPTS[1].title}</TabButton>
                        <TabButton onSelect={() => handleSelect(CORE_CONCEPTS[2].title)}>{CORE_CONCEPTS[2].title}</TabButton>
                        <TabButton onSelect={() => handleSelect(CORE_CONCEPTS[3].title)}>{CORE_CONCEPTS[3].title}</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
