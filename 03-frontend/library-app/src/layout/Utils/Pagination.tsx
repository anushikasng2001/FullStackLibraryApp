export const Pagination: React.FC<{ currentPage: number, totalPages: number, paginate: any }> = (props) => {

    const pageNumbers = []

    if (props.currentPage === 0) {
        pageNumbers.push(props.currentPage)
        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1)
            console.log(pageNumbers)
        } 
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2)
            console.log(pageNumbers)
        }
    } else if (props.currentPage > 0) {
        if (props.currentPage >= 3) {
            pageNumbers.push(props.currentPage - 2)
            pageNumbers.push(props.currentPage - 1)
            console.log(pageNumbers)
        } else {
            pageNumbers.push(props.currentPage - 1)
            console.log(pageNumbers)
        }
        pageNumbers.push(props.currentPage)

        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1)
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2)
        }
    }



    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item" onClick={() => props.paginate(1)}>
                    <button className="page-link">
                        First Page
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => props.paginate(number)}
                        className={"page-item" + (props.currentPage === number ? "active" : "")}>
                        <button className="page-item">
                            {number}
                        </button>
                    </li>
                ))}
                <li className="page-item" onClick={() => props.paginate(props.totalPages)}>
                    <button className="page-link">
                        Last Page
                    </button>
                </li>
            </ul>
        </nav>
    )
}