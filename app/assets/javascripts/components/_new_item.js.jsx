var NewItem = React.createClass({

  createItem(){
    name = this.refs.name.value
    description = this.refs.description.value
    $.ajax({
      url: 'api/v1/items',
      type: 'POST',
      data: {item: {name: name, description: description}},
      success: (item) =>{
        console.log("created")
        this.props.handleSubmit(item);
      }
    })
  },

  render(){
    return(
      <div>
          <input ref='name' placeholder='Enter name of item'/>
          <input ref='description' placeholder='Enter description of item'/>
          <button onClick={this.createItem}>Submit</button>
      </div>
    )
  }
})
