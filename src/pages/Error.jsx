import StyleWrapper from '../assets/styleWrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'

const Error = () => {
    const error = useRouteError()

    if (error.status === 404) {
        return (<StyleWrapper>
            <div>
                <img src={img} alt="404 page" />
                <h3>Ohh!</h3>
                <p>We can't seem to find page you are looking for</p>
                <Link to="/">back home</Link>
            </div>
        </StyleWrapper>)
    }

    return <StyleWrapper>
        <div>
            <h3>something went wrong</h3>
        </div>
    </StyleWrapper>
}

export default Error