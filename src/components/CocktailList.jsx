import StyleWrapper from '../assets/styleWrappers/CocktailList'
import CocktailCard from '../components/CocktailCard'

const CocktailList = ({ drinks }) => {
    if (!drinks) {
        return <h4 style={{ textAlign: 'center' }}>
            No matching cocktails found...
        </h4>
    }

    const formattedDrinks = drinks.map((item) => {
        const { idDrinks, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item

        return {
            id: idDrinks,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass
        }
    })

    return <StyleWrapper>
        {formattedDrinks.map((item) => {
            return <CocktailCard key={item.id} {...item} />
        })}
    </StyleWrapper>
}

export default CocktailList