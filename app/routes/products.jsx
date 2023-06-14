import { Link, useLoaderData } from '@remix-run/react';
import http from '../libs/http';

export default function Products() {
    const data = useLoaderData();

    return (
        <div>
            <h3>Products</h3>
            {JSON.stringify(data)}
            <hr />
            <Link to="/">
                back
            </Link>
        </div>
    );
}

export async function loader({request}) {
    try {
        const response = await http.get('/api/user');

        return response.data;
    } catch (error) {
        return error.response;
    }

    return [1, 2, 3];
}