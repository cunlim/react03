import styles from './Card.module.css'

function withConditionalCard(WrappedComp) {
  return function ConditionalCard({ 
    ...props 
  }) {
    // console.log(props);
    const cardStyle = {
      opacity: props.disabled ? 0.5 : 1,
    }

    return (
      <div
        className={styles.card}
        style={cardStyle}
      >
        <WrappedComp {...props} />
      </div>
    )
  }
}

export default withConditionalCard