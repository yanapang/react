import {useState}  from "react";
import {CORE_CONCEPTS, EXAMPLES} from './data';
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('components')

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p>Please select a topic.</p>;
    if(selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem} />))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            isSelected={selectedTopic===CORE_CONCEPTS[0].title.toLowerCase()}
                            onSelect={() => handleSelect(CORE_CONCEPTS[0].title.toLowerCase())}>
                            {CORE_CONCEPTS[0].title}
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic===CORE_CONCEPTS[1].title.toLowerCase()}
                            onSelect={() => handleSelect(CORE_CONCEPTS[1].title.toLowerCase())}>
                            {CORE_CONCEPTS[1].title}
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic===CORE_CONCEPTS[2].title.toLowerCase()}
                            onSelect={() => handleSelect(CORE_CONCEPTS[2].title.toLowerCase())}>
                            {CORE_CONCEPTS[2].title}
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic===CORE_CONCEPTS[3].title.toLowerCase()}
                            onSelect={() => handleSelect(CORE_CONCEPTS[3].title.toLowerCase())}>
                            {CORE_CONCEPTS[3].title}
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
