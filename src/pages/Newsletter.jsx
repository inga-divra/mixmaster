import { Form } from 'react-router-dom'


const Newsletter = () => {
    return <Form className="form">
        <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            our newsletter
        </h4>
        {/* name */}
        <div className="form-row">
            <label className="form-label" htmlFor="name">
                name
            </label>
            <input
                className="form-input"
                type="text"
                name="name"
                id="name"
                defaultValue="Peter" />
        </div>
        {/* lastName */}
        <div className="form-row">
            <label className="form-label" htmlFor="lastName">
                last name
            </label>
            <input
                className="form-input"
                type="text"
                name="lastName"
                id="lastName"
                defaultValue="Wolt" />
        </div>
        {/* email */}
        <div className="form-row">
            <label className="form-label" htmlFor="email">
                last name
            </label>
            <input
                className="form-input"
                type="text"
                name="email"
                id="email"
                defaultValue="test@test.com" />
        </div>
        <button
            className="btn btn-block"
            type="submit"
            style={{ marginTop: '0.5rem' }}
        >
            submit
        </button>
    </Form>
}

export default Newsletter