import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination({ pagination, onPageChange }) {
  const { _page, _limit, _totalRows } = pagination;
  const lastPage = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <div className='pagination'>
      <h3>Number page: {_page}</h3>

      <button
        disabled={_page === 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        Prev
      </button>

      <button
        disabled={_page === lastPage}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
