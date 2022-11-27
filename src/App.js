import './App.css';
import logo from './images/logo.jpg'

function App() {

    function show_input(event) {
        console.log(event.target.value);
        document.body.style.background = event.target.value;

    }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <img className="App-logo" src={logo} alt="logo"/>
                </div>

                <div>

                    <textarea className="textarea" name="textarea" id="textarea" cols="25" rows="5" onInput={show_input}
                              placeholder={"enter a color please :P)"}/>

                    <p className="description">you have to enter the name of the color without any mistakes</p>
                </div>

            </header>
        </div>
    );
}

export default App;
