import styles from './Card.module.css'

const CardLayout = ({
    title, children
}) => (
    <div className={styles.card}>
        <h2>{title}</h2>
        <div className="content">
            {children}
        </div>
    </div>
)

export default CardLayout