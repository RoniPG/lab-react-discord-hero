import './Button.css';
import PropTypes from 'prop-types';

function Button({ text, style }) {
    return (
        <>
            <div className="container">
                <button className={style} type="button">{text}</button>
            </div>
        </>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
};

export default Button;