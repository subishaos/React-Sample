var AllItems = React.createClass({

  loadItemAfterEdit(item){
    this.props.loadItemAfterEdit(item)
  },

  deleteItem(id){
    $.ajax({
      url: `api/v1/items/${id}`,
      type: 'DELETE',
      success:() => {
        this.props.fetchItems(id)
      }
    })
  },

  render(){
    var items = this.props.items.map((item) => {
      return(
        <div key= {item.id} >
          <Item item={item} handleDelete={this.deleteItem.bind(this, item.id)} loadItemAfterEdit = {this.loadItemAfterEdit}/>
        </div>
      )
    })

    return(
      <div>
        {items}
      </div>
    )
  }
})
