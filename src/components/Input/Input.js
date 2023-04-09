import styles from "./Input.module.css";

const Input = ({
    value,
    onChange,
    name,
    type,
    placeholder,
    setStyles,
    errorMsg,
    required,
    pattern,
}) => {
    const isRequired = required;

    return (
        <>
            <input
                
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={isRequired}
                pattern={pattern}
            />
            <span className={styles[`${setStyles}`]}>{errorMsg}</span>
        </>
    );
};

export default Input;
