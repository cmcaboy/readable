
// Valid Categories: React, Redux, Udacity, None


// SORT_BY_TIMESTAMP
export const sortByTimestamp = () => ({
    type: 'SORT_BY_TIMESTAMP',
    filter: {
        sort: 'timestamp'
    }
});

// SORT_BY_VOTESCORE
export const sortBy = (method) => ({
    type: 'SORT_BY',
    filter: {
        sort: method
    }
});

// FILTER_BY_CATEGORY
export const filterByCategory = (category) => ({
    type: 'FILTER_BY_CATEGORY',
    filter: {
        category
    }
});

// FILTER_BY_ID
export const filterById = (id) => ({
    type: 'FILTER_BY_ID',
    filter: {
        id
    }
});


