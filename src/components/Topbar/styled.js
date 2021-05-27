import styled from 'styled-components'

const TopbarContainer = styled.div`

  .topbar {
    padding-left: 320px;
    transition: all 0.5s;
  }

  .hamburger {
    display: inline-block;
    left: 12px;
    position: relative;
    top: 3px;
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    width: 26px;
    z-index: 999;
    cursor: pointer;
  }

  .hamburger .line {
    background: #fff;
    display: block;
    height: 3px;
    border-radius: 3px;
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hamburger .line:nth-child(1) {
    width: 20px;
  }

  .hamburger .line:nth-child(2) {
    width: 26px;
  }

  .hamburger .line:nth-child(3) {
    width: 20px;
  }

  .hamburger:hover .line {
    width: 26px
  }

  @media only screen and (max-width: 992px) {
    .topbar {
      padding-left: 100px;
    }
  }

  @media only screen and (min-width: 577px) {
    .topbar.show {
      padding-left: 100px;
    }
  }

  @media only screen and (max-width: 576px) {
    .topbar {
      padding-left: 0px;
    }
  }

`

export default TopbarContainer