var Body = React.createClass({

  getInitialState(){
    return { items: [] }
  },

  componentDidMount(){
    $.getJSON('/api/v1/items.json', (response) => {
      this.setState({items: response})
    })
  },

  handleSubmit(item){
    var newState = this.state.items.concat(item)
    this.setState({ items: newState })
  },

  fetchItems(id){
    var newItems = this.state.items.filter((item) =>{
      return item.id != id
    })
    this.setState({items: newItems});
  },

  loadItemAfterEdit(item){
    items = this.state.items.filter((i) => {
      return i.id != id
    })
    items.push(item)
    this.setState({items: items})
  },

  render(){
    return(
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <AllItems items={this.state.items} fetchItems= {this.fetchItems} loadItemAfterEdit = {this.loadItemAfterEdit}/>
      </div>
    )
  }
})
