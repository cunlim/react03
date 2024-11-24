import styles from './Card.module.css'

const ProductCard = ({
    name, price, formatPrice
}) => (
    <div className={styles.card}>
        <h2>{name}</h2>
        <p>Price: {formatPrice(price)}</p>
    </div>
);

export default ProductCard