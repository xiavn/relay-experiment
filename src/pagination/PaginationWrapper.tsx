import React from 'react';
import PageButton from './PageButton';

interface PageCursor {
    cursor: string;
    page: number;
    isCurrent: boolean;
}

interface PaginationProps {
    pageCursors: {
        first: PageCursor | null;
        last: PageCursor | null;
        around: PageCursor[];
        previous: PageCursor | null;
        totalRecords: number;
    };
}

const PaginationWrapper = ({
    pageCursors: { first, last, around },
}: PaginationProps) => {
    return (
        <div style={{ border: '2px solid darkcyan', background: 'azure' }}>
            {first && <PageButton number={first.page} />}
            {around.length &&
                around.map((page) => <PageButton number={page.page} />)}
            {last && <PageButton number={last.page} />}
        </div>
    );
};

export default PaginationWrapper;
