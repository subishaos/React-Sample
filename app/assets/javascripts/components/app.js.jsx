var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var App =
  React.createClass({
    render:function(){
      return <RouteHandler {...this.props}/>;
    }
});
