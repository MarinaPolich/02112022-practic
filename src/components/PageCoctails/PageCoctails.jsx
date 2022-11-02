import { Button } from 'components/Button/Button';
import { Component } from 'react';

export class PageCoctails extends Component {
  state = {
    coctails: [],
  };

  API = 'https://www.thecocktaildb.com/api/json/v1/1/';

  componentDidMount() {
    this.getCoctails('random.php');
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    if (prevQuery !== nextQuery) {
      this.getCoctails(`search.php?f=${this.props.query}`);
    }
  }

  getCoctails = endpoint => {
    fetch(`${this.API}${endpoint}`)
      .then(res => res.json())
      .then(res => this.setState({ coctails: res.drinks }));
  };

  getPageCoctails = () => {
    const { coctails } = this.state;
    if (coctails.length > 3) {
      const { page } = this.props;
      const end = 3 * page;
      return coctails.slice(0, end);
    }
    return coctails;
  };

  //   getPageCoctails = () => {
  //     const { coctails } = this.state;
  //     if (coctails.length > 3) {
  //       const { page } = this.props;
  //       const end = 3 * page;
  //       const start = end - 3;
  //       return coctails.slice(start, end);
  //     }
  //     return coctails;
  //   };

  render() {
    const { coctails } = this.state;
    return (
      <>
        <ul>
          {this.getPageCoctails().map(
            ({ strDrinkThumb, strDrink, idDrink }) => (
              <li
                key={idDrink}
                onClick={() => this.props.onOpen(strDrinkThumb)}
              >
                <img src={strDrinkThumb} alt={strDrink} width="200" />
                <h4>{strDrink}</h4>
              </li>
            )
          )}
        </ul>
        {coctails.length > 3 && <Button onClick={this.props.onChangePage} />}
      </>
    );
  }
}
