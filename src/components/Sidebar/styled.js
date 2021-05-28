import styled from 'styled-components'
import config from '../../config'

const MenuList = styled.div`

  width: 100%;

  .sidebar {
    width: 320px;
    height: 100vh;
    transition: width 0.5s;
    padding-top: 5rem;
  }

  .sidebar.show {
    width: 90px;
    height: 100%;
    transition: width 0.5s;
  }

  .sidebar.show li p {
    display: none;
  }

  .sidebar.show .logo img {
      max-width: 84px;
  }

  .sidebar.show .menu-item {
      padding-left: 30%;
  }

  .menu {
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 2rem;
  }


  li {
    position: relative;
    padding:1rem 0.8rem;
    margin: 0.3rem 0rem;
    transition: size 0.2s;
    font-size: 18px;
    font-weight: 400;
  }

  li svg {
    transition: all 0.5s;
  }

  li:hover svg {
    transform: scale(1.15);
  }

  li a {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  li.active {
    background: ${config.theme.colors.primary_light}1A;
    color: ${config.theme.colors.primary_light}
  }

  li.active::before {
    width: 10px;
    position: absolute;
    content: "";
    background: ${config.theme.colors.primary_light};
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: all 0.5s;
    -ms-transition: all 0.5s;
    transition: all 0.5s;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  @media only screen and (max-width: 992px) {
    .sidebar.hide {
      width: 90px;
      height: 100%;
    }

    .sidebar.show {
      width: 320px;
      height: 100%;
    }

    .sidebar.hide .logo img {
      max-width: 84px;
    }

    .sidebar.show .logo img {
      max-width: 164px;
    }

    .sidebar.hide .menu-item {
      padding-left: 30%;
    }

    .sidebar.show .menu-item {
      padding-left: 10%;
    }

    .sidebar.hide li p {
      display: none;
    }

    .sidebar.show li p {
      display: block;
    }

  }

  @media only screen and (max-width: 576px) {
    .sidebar.hide {
      width: 0px;
      padding-top: 5rem;
    }

    .sidebar.show {
      width: 320px;
      padding-top: 5rem;
    }

    .sidebar.show .menu-item {
      padding-left: 10%;
    }

    .sidebar.show li p {
      display: block;
    }

    .sidebar .logo {
      display: none;
    }
  }

`;

export default MenuList