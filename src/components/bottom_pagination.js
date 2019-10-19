import { Link } from "gatsby"
import { clamp, range } from "lodash"
import React from "react"
import paginationStyles from "./layout.module.scss"

const BottomPagination = ({ currentPageNum, maxPageNum, address }) => {
  const pageRange = 5
  const lowerBound = clamp(currentPageNum - pageRange, 1, maxPageNum)
  const upperBound = clamp(lowerBound + pageRange, lowerBound, maxPageNum)

  return (
    <div className={paginationStyles.pagination}>
      {range(lowerBound, upperBound + 1).map(val => {
        return (
          <Link
            to={`${address}/${val === 1 ? "" : "pg" + val}`}
            className={paginationStyles.pagination__number}
            activeClassName={paginationStyles.pagination__number__active}
          >
            {val}
          </Link>
        )
      })}
    </div>
  )
}

export default BottomPagination
