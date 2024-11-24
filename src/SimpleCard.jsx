function SimpleCard({ title, content, disabled }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{disabled ? "disabled true" : "disabled false"}</p>
        </div>
    )
}

export default SimpleCard