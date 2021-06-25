import React from 'react';

interface PageButtonProps {
    number: number;
}

const PageButton = ({ number }: PageButtonProps) => {
    return <button>{number}</button>;
};

export default PageButton;
