var Item = React.createClass({

  getInitialState(){
    return {editable: false}
  },

  handleEdit(){
    if(this.state.editable){
      name = this.refs.name.value
      description = this.refs.description.value
      id = this.props.item.id
      $.ajax({
        url: '/api/v1/items/'+id,
        data: {item: { name: name, description: description}},
        type: 'PUT',
        success: (response) => {
          this.props.loadItemAfterEdit(response)
        }
      })
    }
    this.setState({editable: !this.state.editable})
  },

  render(){
    var name = this.state.editable ? <input type='text' defaultValue={this.props.item.name} ref='name'/> : <h3>{this.props.item.name}</h3>

    var description = this.state.editable ? <input type='text' defaultValue={this.props.item.description} ref='description'/> : <h3>{this.props.item.description}</h3>

    return(
      <div>
        {name}
        {description}
        <button onClick={this.props.handleDelete}>DELETE</button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'submit' : 'EDIT'}</button>
      </div>
    )
  }
});
