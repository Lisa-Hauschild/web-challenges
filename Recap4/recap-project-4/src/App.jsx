
import './index.css';
import Card from './Card';

function App() {
return (
  <>

<span className="textbg">
<h1 className="text">Theme Creator</h1>
</span>
<span className="Cardbc" >

  <h2>Theme: Universe </h2>
  <Card  name="SaturnBlue" role= "primary" hex="#1130b6"></Card>
  <Card name="Neptunepurple" role="secondary" hex="#4d1cb0"></Card>
  <Card name="Startwinkle" role="tertiary" hex="#f1e865"></Card>
</span>
<span className="Cardbc" >
        <h2>Theme: Ocean </h2>
        <Card name="DeepBlue" role="primary" hex="#0857a5"></Card>
        <Card name="Coral" role="secondary" hex="#eb5191"></Card>
        <Card name="Azure" role="tertiary" hex="#49eaed"></Card>
        <Card></Card>
        </span>
</>
)
  
  }
export default App

