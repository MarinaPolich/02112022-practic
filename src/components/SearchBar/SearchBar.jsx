import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handlelChang = e => {
    this.setState({ value: e.target.value });
  };

  handlelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handlelSubmit}>
        <label>
          <input
            type="text"
            name="search"
            onChange={this.handlelChang}
            value={this.state.value}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
