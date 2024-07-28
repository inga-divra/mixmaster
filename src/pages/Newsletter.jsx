import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


// !!! redirect is designed for actions and loaders

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';


export const action = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        const response = await axios.post(newsletterUrl, data)
        toast.success(response.data.msg)
        return redirect('/')
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.msg)
        return error
    }
}

const Newsletter = () => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return <Form className="form" method='POST'>
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
                required />
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
                id="lastName" />
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
                required
                defaultValue="test@test.com" />
        </div>
        <button
            className="btn btn-block"
            type="submit"
            style={{ marginTop: '0.5rem' }}
            disabled={isSubmitting}
        >
            {isSubmitting ? 'submitting' : 'submit'}
        </button>
    </Form>
}

export default Newsletter