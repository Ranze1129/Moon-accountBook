import styled from 'styled-components';
import {Link,NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';




const NavWrapper = styled.nav`
  line-height: 24px;

  > ul {
    display: flex;

    > li {
      width: 33.33333%;
      text-align: center;

      > a {
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;

        .icon {
          width: 24px;
          height: 24px;
          fill: #515151;
        }

        &.selected {
          color: #f69d02;

          .icon {
            fill: #f69d02;
          }
        }
      }

    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;