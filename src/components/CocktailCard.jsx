import { Link } from 'react-router-dom'
import StyleWrapper from '../assets/styleWrappers/CocktailCard'

const CocktailCard = ({ id, image, name, info, glass }) => {
    return <StyleWrapper>
        <div className="img-container">
            <img className="img" src={image} alt="img" />
        </div>
        <div className="footer">
            <h4>{name}</h4>
            <h5>{glass}</h5>
            <p>{info}</p>
            <Link
                className="btn"
                to={`/cocktail/${id}`}>details</Link>
        </div>
    </StyleWrapper>
}

export default CocktailCard