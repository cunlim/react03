const handleEvent = (name, which) => {
  console.log(name, which)
}

const Button = ({name}) => (
  <button 
    onMouseEnter={
      () => handleEvent(name, 'MouseEnter')
    }
    onMouseLeave={
      () => handleEvent(name, 'MouseLeave')
    }
    onDoubleClick={
      () => handleEvent(name, 'DoubleClick')
    }
    onContextMenu={
      () => handleEvent(name, 'onContextMenu')
    }
  >
    {name}
  </button>
)

export default Button