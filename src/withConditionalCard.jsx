import styles from './Card.module.css'

function withConditionalCard(WrappedComp) {
  return function ConditionalCard({ 
    disabled, ...props 
  }) {
    const cardStyle = {
      opacity: disabled ? 0.5 : 1,
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