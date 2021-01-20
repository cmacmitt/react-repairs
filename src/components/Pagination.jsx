import React from 'react';

const arrayFromRange = (count) => {
  return [...Array(count + 1).keys()].slice(1);
};

const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = arrayFromRange(pagesCount);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? 'page-item active' : 'page-item'}
            key={page}
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
