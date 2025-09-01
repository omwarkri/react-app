// App.jsx
import React from "react";
import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Message from "./components/Message";
import Status from "./components/Status";
import NameList from "./components/NameList";
import ContactForm from "./components/ContactForm";
import Parent from "./components/Parent";
import Timer from "./components/Timer";
import Card from "./components/Card";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Mini React Project</h1>
      <Card>
        <Welcome />
        <Greeting name="Om" />
        <Counter />
        <Message />
        <Status isLoggedIn={true} />
        <NameList />
        <ContactForm />
        <Parent />
        <Timer />
      </Card>
    </div>
  );
}

export default App;

// components/Welcome.jsx
function Welcome() {
  return <h2>Hello, Om!</h2>;
}
export default Welcome;