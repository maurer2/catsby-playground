import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Link from './link';
import config from '../../config.js';

import Sidebar from './sidebar';

function myFunction() {
  const x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${(props) => (props.isDarkThemeActive ? '#001932' : undefined)};

  @media (max-width: 767px) {
    display: block;
  }
`;

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={(data) => {
      const {
        site: {
          siteMetadata: {
            headerTitle, githubUrl, helpUrl, tweetText, logo, headerLinks,
          },
        },
      } = data;

      const finalLogoLink = logo.link !== '' ? logo.link : 'https://hasura.io/';

      return (
        <div className="navBarWrapper">
          <nav className="navBarDefault">
            <div className="navBarHeader">
              <Link to={finalLogoLink} className="navBarBrand">
                <img
                  className="img-responsive displayInline"
                  src={logo.image !== '' ? logo.image : logoImg}
                  alt="logo"
                />
              </Link>
            </div>
            <div id="navbar" className="topnav">
              <div className="visibleMobile">
                <Sidebar location={location} />
                <hr />
              </div>
              <ul className="navBarUL navBarNav navBarULRight">
                {headerLinks.map((link, key) => {
                  if (link.link !== '' && link.text !== '') {
                    return (
                      <li key={key}>
                        <a
                          className="sidebarLink"
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          dangerouslySetInnerHTML={{ __html: link.text }}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </nav>
          <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
            <div className="navBarDefault removePadd">
              <span
                onClick={myFunction}
                className="navBarToggle"
                onKeyDown={myFunction}
                role="button"
                tabIndex={0}
              >
                <span className="iconBar" />
                <span className="iconBar" />
                <span className="iconBar" />
              </span>
            </div>
          </StyledBgDiv>
        </div>
      );
    }}
  />
);

export default Header;
