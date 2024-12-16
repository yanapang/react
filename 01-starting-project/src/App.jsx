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

function App() {
    return (
        <div>
            <Header />
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
