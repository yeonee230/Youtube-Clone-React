//2-2. Link to="라우터" 태그를 이용하면 라우팅 할 수 있다. 

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/videos'>Videos</Link>
        </nav>
    );
}

