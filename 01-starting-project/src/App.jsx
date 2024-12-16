import componentImg from './assets/components.png'
import {CORE_CONCEPTS} from './data';

const reactDescriptions = ['Apple', 'Banana', 'Carrot']

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    //이렇게 변수로 할당받아 사용 가능
    const description = reactDescriptions[getRandomInt(2)];
    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom"/>
            <h1>React Essentials</h1>
            {/*//바로 사용도 가능*/}
            <p>
                {reactDescriptions[getRandomInt(2)]} <br/>
                {description} <br/>
                Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

function ReusableComponent (props) {
    //react get all the props as one object. (props)
    //or it can also be used with destructuring javascript methods ({title, description, image})
    return (
        <li>
            <img src={props.image}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <ReusableComponent
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <ReusableComponent {...CORE_CONCEPTS[1]} />
                        {/*
                            shorter version. if the data given has same name,
                            prop values can be used like this.
                            and this is how to use documentation in jsx :)
                        */}
                        <ReusableComponent {...CORE_CONCEPTS[2]} />
                        <ReusableComponent {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
