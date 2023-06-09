import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionSetIndexPage } from 'redux/page/pageActions';

import styled from 'styled-components';
import Layout from '../Layout';

const AppGridPage: React.FC<{ path?: string; children?: React.ReactNode }> = ({ path, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (path) {
      dispatch(actionSetIndexPage(path));
    }
  }, [dispatch, path]);

  return (
    <Layout>
      <GridPage>{children}</GridPage>;
    </Layout>
  );
};

const GridPage = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  height: 100%;
  max-height: 100%;
  max-width: 100%;

  // overflow: auto;
  @media screen and (max-width: 768px) {
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export default AppGridPage;
