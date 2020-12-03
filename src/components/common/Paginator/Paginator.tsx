import React from 'react';
import s from '../../Users/Users.module.css';
import userPhoto from '../../../assets/images/user.jpg';
import { userType } from '../../../redux/users-reducer';
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';

type usersType = {
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
};

const Paginator: React.FC<usersType> = ({
  pageSize,
  totalUsersCount,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount: number = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p ? s.selected_page : ''}
            onClick={() => {
              onPageChanged(p);
            }}
            key={v1()}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
