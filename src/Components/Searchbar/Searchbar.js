import React, { Component } from 'react';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { search: '' };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
