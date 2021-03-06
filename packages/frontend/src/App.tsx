import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ThemeProvider, Router, ROUTES } from './model/providers';
import {
  Content,
  Sidebar,
  Dashboard,
  YourAPI,
  DataSources,
  MetricsAndLogs,
  Users,
  GlobalSettings,
  Webhooks,
  GatewayNodes,
  Documentation,
  SupportForum,
  Services,
} from './view';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Sidebar />
        <Content>
          <Switch>
            <Route path="/" exact><Redirect to={ROUTES.DASHBOARD} /></Route>
            <Route path={ROUTES.DASHBOARD}><Dashboard /></Route>
            <Route path={ROUTES.APIS}><YourAPI /></Route>
            <Route path={ROUTES.DATA_SOURCES}><DataSources /></Route>
            <Route path={ROUTES.METRICS_AND_LOGS}><MetricsAndLogs /></Route>
            <Route path={ROUTES.USERS}><Users /></Route>
            <Route path={ROUTES.GLOBAL}><GlobalSettings /></Route>
            <Route path={ROUTES.WEBHOOKS}><Webhooks /></Route>
            <Route path={ROUTES.NODES}><GatewayNodes /></Route>
            <Route path={ROUTES.DOCUMENTATION}><Documentation /></Route>
            <Route path={ROUTES.SUPPORT}><SupportForum /></Route>
            <Route path={ROUTES.SERVICES}><Services /></Route>
          </Switch>
        </Content>
      </ThemeProvider>
    </Router>
  );
}

export default App;
