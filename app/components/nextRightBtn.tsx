import React, {useState} from 'react';

const ROW_PER_PAGE = 25

export default function nextRightBtn(){

    const [currentPage, setCurrentPage] = useState(0)

    //calculate total pages
    const totalPages = 

    const handleNextClick = () => {

    }
 
    return (
        <button onClick={handleNextClick} className="btn btn-outline btn-info">Next</button>
    )
}