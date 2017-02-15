var SignInForm =
  React.createClass({
    handleSignInClick: function(e) {
      $.ajax({
        method: "POST",
        url: "/users/sign_in.json",
        data: {
          user: {
            email: this.state.email,
            password: this.state.password
          },
          authenticity_token: 'Functions.getMetaContent("csrf-token")'
        }
      })
      .done(function(data){
        location.reload();
      }.bind(this));
    },
    render:function(){
      return (
          <form>
              <input name='email' placeholder='email' ref ='email'/>
              <input name='password' placeholder='password' ref='password'/>
              <input type='submit' onClick={this.handleSignInClick} defaultValue='login' />
          </form>
      )
    }
  });
