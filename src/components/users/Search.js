import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            onChange={this.onChange}
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
