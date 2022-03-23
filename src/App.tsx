import React from 'react';
import {
  HashRouter as Router, Switch, Route, Link, Redirect
} from 'react-router-dom';
import Layout from 'components/Layout';


function App() {
  return (
    <Router>
          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
    </Router>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>Statistics</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>Money</h2>
    </Layout>
  );
}

function NoMatch() {
  return (
    <div>页面不存在，请输入正确地址</div>
  );
}

export default App;
