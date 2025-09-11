'use client';
import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
    pageCount: number;
    currentPage: number;
    onPageChange: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    pageCount,
    currentPage,
    onPageChange,
}) => {
    return (
        <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={pageCount}
            forcePage={currentPage}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={(selectedItem) => onPageChange(selectedItem.selected)}
            containerClassName={
                'flex gap-2 justify-center items-center mt-2 list-none'
            }
            pageClassName={''} // keep empty
            previousClassName={''}
            nextClassName={''}
            pageLinkClassName={
                'px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer'
            }
            previousLinkClassName={
                'px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer'
            }
            nextLinkClassName={
                'px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer'
            }
            breakLinkClassName={'px-3 py-1 border rounded cursor-default'}
            activeLinkClassName={
                'bg-blue-900 text-white border border-blue-900 cursor-pointer'
            }
            disabledLinkClassName={'opacity-50 cursor-not-allowed'}
        />
    );
};

export default Pagination;
