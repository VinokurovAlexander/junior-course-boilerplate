import styled from 'styled-components';

const GHOST_COLOR = '#F5F6FA';

const GhostMainStyle = styled.div`
  position: relative;
  background-color: ${GHOST_COLOR};
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;

    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
    animation: load ease-out 1.5s infinite;
  }

  @keyframes load {
    from {
        left: -100%;
    }
    to   {
        left: 100%;
    }
  }
`;

const GhostItem = styled(GhostMainStyle)`
  height: 24px;
`

const GhostTitle = styled(GhostItem)`
  width: 80%;
`

const GhostRating = styled(GhostItem)`
  width: 50%;
`

const GhostPrice = styled(GhostItem)`
  width: 65%;
`

export { GhostMainStyle, GhostTitle, GhostRating, GhostPrice };

