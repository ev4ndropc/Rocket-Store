import styled from 'styled-components'
import config from '../../config'

const ContentContainer = styled.div`

  width: 100%;

  .content {
    width: 100%;
    padding-top: 6rem;
    padding-left: 90px;
    transition: all 0.5s;
  }

  .content>div {
    padding: 24px
  }

  .content.hide {
    padding-left: 320px;
  }

  @media only screen and (max-width: 992px) {

    .content.hide {
      padding-left: 90px;
    }

    .content.show {
      padding-left: 320px;
    }

  }

  @media only screen and (max-width: 576px) {
    .content>div {
      padding: 12px
    }

    .content.hide {
      padding-left: 0px;
    }

    .content.show {
      padding-left: 320px;
    }
  }

`;

export default ContentContainer