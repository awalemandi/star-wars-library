function Button({ label, icon }) {
    return (
        <button className={`button`}>
            <div className={`iconContainer`}>{icon}</div>
            <div className={`labelContainer`}>{label}</div>
        </button>
    );
}

export default Button;
