var HelloWorld = React.createClass({

  render: function() {
    if(this.props.is_logged_in){
     return <p>{this.props.current_user.name} is logged in </p>
    }
    if(!this.props.is_logged_in){
      return <p>NOt logged in </p>
    }
  }

});
