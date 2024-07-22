'use client'
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
const apiUrl = 'http://localhost:4001'
const cart = [
    {
        productId: 1,
        name: 'sunglasses',
        price: 300,
        image: ['https://shopoptica.com/wp-content/uploads/2023/05/6--600x600.jpg']
    },
    {
        productId: 2,
        name: 'mobile',
        price: 50,
        image: ['https://shopoptica.com/wp-content/uploads/2023/05/6--600x600.jpg']
    }
]

export default function page() {

    const makePayment = async () => {
        // console.log(process.env.REACT_APP_STRIPE_SECRET)
        console.log("env file data", process.env.NEXT_PUBLIC_STRIPE_SECRET)

        try {
            const response = await axios.post('http://localhost:4001/api/createlog', {
                title: 'welcome to my new prompt',
                price: 20
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);
        const body = {
            products: cart
        }

        const headers = {
            "content-type": 'application/json'
        }

        const response = await fetch(`${apiUrl}/create-checkout-session`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })

        const session = await response.json()
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        })
        if (result.error) {
            console.log(result.error)
        }

        // ...................create log..........

    }

    return (
        <div>
            <button onClick={makePayment}>Pay now</button>
        </div>
    );
}
