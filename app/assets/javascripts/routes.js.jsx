var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={HelloWorld} />
    <Route name='login' handler={SignInForm} path='login'/>
    <Route name='signup' handler={SignUpForm} path='signup'/>
  </Route>
);
