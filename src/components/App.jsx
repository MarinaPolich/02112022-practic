import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { PageCoctails } from './PageCoctails/PageCoctails';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    isOpenModal: false,
    url: '',
  };

  onSubmit = value => {
    this.setState({ query: value, page: 1 });
  };

  onChangePage = () => {
    this.setState(prev => {
      return {
        page: prev.page + 1,
      };
    });
  };

  togleModal = url => {
    this.setState(prev => ({ isOpenModal: !prev.isOpenModal, url }));
  };

  render() {
    const { page, query, isOpenModal, url } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar onSubmit={this.onSubmit} />
        <PageCoctails
          query={query}
          page={page}
          onChangePage={this.onChangePage}
          onOpen={this.togleModal}
        />
        {isOpenModal && <Modal onClose={this.togleModal} url={url} />}
      </div>
    );
  }
}
