import React, { useEffect, useState } from 'react';

import cn from 'classnames';
import { NavLink, useNavigate } from 'react-router-dom';

import { Button } from '../buttons/button/Button';
import { SvgSelector } from '../svgSelector/SVGSelector';

import style from './Pagination.module.scss';
import { PaginationPropsType } from './types';

export const Pagination = (props: PaginationPropsType) => {
  const { totalItemsCount, itemsPerPageCount, currentPage, visiblePaginationLinksCount } =
    props;

  const navigate = useNavigate();

  const totalPaginationLinksCount = Math.ceil(totalItemsCount / itemsPerPageCount);
  const paginationLinksArray: number[] = [];

  for (let index = 1; index <= totalPaginationLinksCount; index += 1) {
    paginationLinksArray.push(index);
  }

  const [portionNumber, setPortionNumber] = useState<number>(1);

  const lastPage = paginationLinksArray.length;
  const portionCount = Math.ceil(totalPaginationLinksCount / visiblePaginationLinksCount);
  const leftPortionPageNumber = (portionNumber - 1) * visiblePaginationLinksCount + 1;
  const rightPortionPageNumber = portionNumber * visiblePaginationLinksCount;
  const manyPagesIndicatorCondition =
    totalPaginationLinksCount > visiblePaginationLinksCount + 1 &&
    portionCount !== portionNumber &&
    rightPortionPageNumber !== lastPage - 1;
  const lastPageCondition =
    totalPaginationLinksCount > visiblePaginationLinksCount &&
    portionCount !== portionNumber;

  const scrollToTop = (): void => {
    window.scrollTo(0, 0);
  };

  const prevPageAction = (): void => {
    navigate(`../${currentPage - 1}`);
  };

  const nextPageAction = (): void => {
    navigate(`../${currentPage + 1}`);
  };

  useEffect(() => {
    scrollToTop();

    const currentPaginationPages: number[] = paginationLinksArray.filter(
      (page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
    );
    const isCurrentPageWithinSight = currentPaginationPages.some(
      (pageNumber) => pageNumber === currentPage,
    );

    if (!isCurrentPageWithinSight) {
      let pageNumberIterationValue = 0;

      for (let portionIndex = 0; portionIndex < portionCount; portionIndex += 1) {
        const portionPagesForCurrentIteration: number[] = paginationLinksArray.slice(
          pageNumberIterationValue,
          pageNumberIterationValue + visiblePaginationLinksCount,
        );

        pageNumberIterationValue += visiblePaginationLinksCount;
        const isCurrentPageInWithinSightCurrentIteration =
          portionPagesForCurrentIteration.some(
            (pageNumber) => pageNumber === currentPage,
          );

        if (isCurrentPageInWithinSightCurrentIteration) {
          setPortionNumber(portionIndex + 1);

          return;
        }
      }
    }
  }, [currentPage]);

  return (
    <div className={style.pagination}>
      <div className={style.buttonContainer}>
        <Button
          className={style.button}
          disabled={currentPage <= 1}
          leftIcon={<SvgSelector id='leftArrow' />}
          onClick={prevPageAction}
        >
          Prev
        </Button>
      </div>
      <div className={style.pageBlock}>
        {paginationLinksArray
          .filter(
            (page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
          )
          .map((page) => (
            <NavLink
              className={cn(style.page, {
                [style.selectedPage]: currentPage === page,
              })}
              key={page}
              to={`../${page.toString()}`}
            >
              {page}
            </NavLink>
          ))}
        {manyPagesIndicatorCondition && (
          <div className={cn(style.page, style.noHover)}>...</div>
        )}
        {lastPageCondition && (
          <NavLink
            className={cn(style.page, {
              [style.selectedPage]: currentPage === lastPage,
            })}
            key={lastPage}
            to={`../${lastPage.toString()}`}
          >
            {lastPage}
          </NavLink>
        )}
      </div>
      <div className={style.buttonContainer}>
        <Button
          className={style.button}
          disabled={currentPage >= totalPaginationLinksCount}
          onClick={nextPageAction}
          rightIcon={<SvgSelector id='rightArrow' />}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
