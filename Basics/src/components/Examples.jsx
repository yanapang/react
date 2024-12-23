import TabButton from "./TabButton";
import {CORE_CONCEPTS, EXAMPLES} from "../data";
import {useState} from "react";
import Section from "./Section";

export default function Examples() {

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
        <Section title="Examples" id="examples">
            <menu>
                <TabButton
                    isSelected={selectedTopic === CORE_CONCEPTS[0].title.toLowerCase()}
                    onSelect={() => handleSelect(CORE_CONCEPTS[0].title.toLowerCase())}>
                    {CORE_CONCEPTS[0].title}
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === CORE_CONCEPTS[1].title.toLowerCase()}
                    onSelect={() => handleSelect(CORE_CONCEPTS[1].title.toLowerCase())}>
                    {CORE_CONCEPTS[1].title}
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === CORE_CONCEPTS[2].title.toLowerCase()}
                    onSelect={() => handleSelect(CORE_CONCEPTS[2].title.toLowerCase())}>
                    {CORE_CONCEPTS[2].title}
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === CORE_CONCEPTS[3].title.toLowerCase()}
                    onSelect={() => handleSelect(CORE_CONCEPTS[3].title.toLowerCase())}>
                    {CORE_CONCEPTS[3].title}
                </TabButton>
            </menu>
            {tabContent}
        </Section>
    )
}