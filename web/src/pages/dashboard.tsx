import { useEffect } from 'react';
import { Can } from '../components/Can';
import { useAuth } from '../contexts/AuthContext';
import { useCan } from '../hooks/useCan';
import { setupAPIClient } from '../services/api';
import { api } from '../services/apiClient';
import { withSSRAuth } from '../utils/withSSRAuth';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list'],
    roles: ['administrator'],
  });

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button type="button" onClick={signOut}>Sign out</button>

      { userCanSeeMetrics && <div>Métricas 1</div> }

      <Can permissions={['metrics.list']}>
        <div>Métricas 2</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  await apiClient.get('/me');

  return {
    props: {},
  };
});

export default Dashboard;
