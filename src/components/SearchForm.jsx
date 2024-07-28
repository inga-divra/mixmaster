import StyleWrapper from '../assets/styleWrappers/SearchForm'
import { Form, useNavigation } from 'react-router-dom'

const SearchForm = () => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return <StyleWrapper>
        <Form className='form'>
            <input
                className='form-input'
                type='search'
                name='search'
                defaultValue='fresh lime' />
            <button
                className='btn'
                type='submit'
                disabled={isSubmitting}>
                {isSubmitting ? 'searching...' : 'search'}
            </button>
        </Form>
    </StyleWrapper>
}

export default SearchForm