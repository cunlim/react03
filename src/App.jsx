import './App.css'
import reactLogo from './assets/react.svg'

function App() {

  const disableInput = true;
  const reactLogoAlt = "React Logo";
  const divStyle = {
    backgroundColor: "lightblue",
    margin: "12px",
    padding: "20px",
    borderRadius: "8px"
  };

  return (
    <>
      <label
        htmlFor="username"        // for
      >
        Username:
      </label>
      <input
        type="text"
        id="username"

        className="input-field"   // class
        autoComplete="off"        // autocomplete

        maxLength={20}            // maxlength
        spellcheck={true}         // Warning: Invalid DOM property `spellcheck`. Did you mean `spellCheck`? Error Component Stack
        readOnly={false}          // readonly
        tabIndex={0}              // tabindex

        disabled={disableInput}
        placeholder={disableInput ? "DISABLED" : "Enter your name."}
      />

      <img
        src={reactLogo}
        alt={reactLogoAlt}
        width={256}
        height={228}
      />

      <span style={
        {
          fontWeight: "bold",
          fontStyle: "italic"
        }
      }>
        Bold & Italic
      </span>

      <div style={divStyle}>
        DIV 1
      </div>
      <div style={{
        ...divStyle,
        backgroundColor: 'lightgreen',
        color: "darkblue",
        fontWeight: "bold"
      }}>
        DIV 2
      </div>
    </>
  )
}

export default App
