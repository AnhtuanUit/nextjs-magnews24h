import { withRouter } from 'next/router';

function Index({ router }) {
  return (
    <div>
      <p>{router.query.category}</p>
    </div>
  );
}

export default withRouter(Index)