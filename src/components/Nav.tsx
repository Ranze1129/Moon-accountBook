import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';




const NavWrapper = styled.nav`
  line-height: 24px;

  > ul {
    display: flex;

    > li {
      width: 33.33333%;
      text-align: center;
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      .icon{
        width: 24px;
        height: 24px;
        fill: #515151;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name='tag'/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name='money'/>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name='chart'/>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;