import styles from './Card.module.css'

const InfoCard = (props) => (
  <div className={styles.card}>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <p>Author: {props.author}</p>
  </div>
)

export default InfoCard