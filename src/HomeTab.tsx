import LogInForm from 'LogInForm';
import React from 'react';
import { Link } from 'routing';

const HomeTab = () => {
    return (
        <div>
            <LogInForm />
            <Link to="/sign-up">Or sign up</Link>
        </div>
    );
};

export default HomeTab;
