import styles from './Card.module.css'

const InfoCard = ({ title, content, author }) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>Author: {author}</p>
  </div>
)

export default InfoCard