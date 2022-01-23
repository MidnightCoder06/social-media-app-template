import React, { useEffect, useState } from 'react';
import '../styles/Pagination.css';

// in a real app this would need to be the wrapper over the ListTodos component so you can control what data is retried and shown 
const Pagination = (props) => {
    const { data } = props;
    const pageSize = 2;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPageCount, setTotalPageCount] = useState<number>(1);
    const [pages, setPages] = useState<number[]>([]);

    const generateArrayRange = (len) => {
		const arr = new Array(len);
       	let currValue = 1
		for (let i = 0; i < len; i++, currValue++) {
			arr[i] = currValue;
		}
      	return arr;
    }

    useEffect(() => {
        const totalPages = Math.ceil(data.length / pageSize);
        setTotalPageCount(totalPages);
        setPages(generateArrayRange(totalPages))
    }, []);

    return (
        <ul className="pagination">
            <li className={currentPage === 1 ? 'disabled' : ''}>
                <a onClick={() => setCurrentPage(1)}>First</a>
            </li>
            <li className={currentPage === 1 ? 'disabled' : ''}>
                <a onClick={() => setCurrentPage(currentPage - 1)}>Previous</a>
            </li>
            {pages.map((page, index) =>
                <li key={index} className={currentPage === page ? 'active' : ''}>
                    <a onClick={() => setCurrentPage(page)}>{page}</a>
                </li>
            )}
            <li className={currentPage === totalPageCount ? 'disabled' : ''}>
                <a onClick={() => setCurrentPage(currentPage + 1)}>Next</a>
            </li>
            <li className={currentPage === totalPageCount ? 'disabled' : ''}>
                <a onClick={() => setCurrentPage(totalPageCount)}>Last</a>
            </li>
        </ul>
    );
}

export default Pagination;