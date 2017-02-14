var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={HelloWorld} />
    <Route name='page1' handler={AnotherPage} path='page1'/>
  </Route>
);
