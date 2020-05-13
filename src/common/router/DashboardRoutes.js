import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
const routes = [
  {
    path: '/',
    component: lazy(() => import('../../pages/index/App')),
    exact: true,
  },
  {
    path: '/home',
    component: lazy(() => import('../../pages/home/App')),
  },
  {
    path: '/chain',
    component: lazy(() => import('../../pages/chain/App')),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<div className="loading">
    </div>}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${route.path}`}
                 >
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
