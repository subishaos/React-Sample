var SignUpForm =
  React.createClass({
    handleRegistrationClick(){
      $.ajax({
        method: "POST",
        url: "/users.json",
        data: {
          user: {
            email: this.refs.email.value,
            password: this.refs.password.value,
            password_confirmation: this.refs.password_confirmation.value,
            name: this.refs.name.value,
            provider: "email"
          }
        },
        success: (response) =>{
          console.log(response)
        }
      })
    },
    render:function(){
      return (
          <div>
            <input type='text' name='name' placeholder='name' ref='name'/>
            <input type='email' name='email' placeholder='email' ref='email'/>
            <input type='password' name='password' placeholder='password' ref='password'/>
            <input type='password' name='password_confirmation' placeholder='re-type password' ref='password_confirmation'/>
            <button onClick={this.handleRegistrationClick}>SignUp</button>
          </div>
      )
    }
  });
