import { Link } from '@remix-run/react';

export default function Index() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/products">
                        products
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        login
                    </Link>
                </li>
            </ul>
        </div>
    );
}