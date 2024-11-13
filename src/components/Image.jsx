import PropTypes from 'prop-types';
import './Image.css';

function Image({ src, alt }) {
    return (
        <>
            <div className={`size ${alt}`}>
                <img src={src} alt={alt} />
            </div>
        </>
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;