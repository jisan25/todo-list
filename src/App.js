import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import uuid from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state={
    items:[],
    id:uuid(),
    title:'',
    editItem:false
  };

   handleChange = e => {
     this.setState({
       title:e.target.value
     });
   };

   handleSubmit = e => {
     e.preventDefault();

     const newItem = {
       id: this.state.id,
       title:this.state.title
     };

  const updatedItems = [...this.state.items,newItem];

  this.setState({
    items:updatedItems,
    title:'',
    id:uuid(),
    editItem:false

  })
   };
  clearList = () => {
    this.setState({
      items:[]
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filteredItems
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id )
    const selectedItem = this.state.items.find(item => item.id === id)
    
    this.setState({
      items:filteredItems,
      title: selectedItem.title,
      id:id,
      editItem: true
    });

   
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-4">
                <h3 className="text-capitalize text-center">Todo Input</h3>
                <TodoInput 
                title={this.state.title} 
                handleChange={this.handleChange}
                 handleSubmit={this.handleSubmit}
                 editItem={this.state.editItem} />
                <TodoList items={this.state.items} 
                          clearList={this.clearList}
                          handleDelete={this.handleDelete}
                          handleEdit={this.handleEdit}
                          />
              </div>
          </div>
      </div>
    );
  }
}

export default App;