const Button = ({name}) => (
    <button 
      onClick={
        () => console.log(name)
      }
    >
      {name}
    </button>
  )
  
  export default Button