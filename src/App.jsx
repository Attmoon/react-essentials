import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descryption = reactDescriptions[genRandomInt(2)];

  
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descryption} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.descryption}</p>
  </li>
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title="Components" 
            descryption="The core UI building block."
            image={componentImg} 
          />
          <CoreConcept title="Props" />
          <CoreConcept />
          <CoreConcept />
        </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;