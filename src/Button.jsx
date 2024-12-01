const handleEvent = (name, e) => {
  console.log(name, e)
  console.log(name, e.clientX, e.clientY)
  console.log(name, e.shiftKey)
}

const Button = ({name}) => (
  <button 
    onClick={
      (e) => handleEvent(name, e)
    }
  >
    {name}
  </button>
)

export default Button