import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filters.module.scss';

class Filters extends React.Component {

  state = {
    search: {
      input: '',
    },
    isError: false,
  }

  updateTextField = ({ target }) => {
    const { search } = this.state;
    const { value, name } = target;

    this.setState({ search: { ...search, [name]: value }});
  }

  submitForm = async (e) => {
    const { search } = this.state;
    const { loadSearchedItem } = this.props;

    e.preventDefault();

    if(search.input) {
      await loadSearchedItem(search.input);
      this.setState({
        search: {
          input: '',
        },
        isError: false,
      });
    } else {
      this.setState({ isError: true });
    }
  }

  render(){

    const { search, isError } = this.state;
    const { item } = this.props;

    return (
      <div className='row justify-content-around align-content-center'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <form onSubmit={this.submitForm} method='GET' className={styles.form} action={`${process.env.PUBLIC_URL}${window.location.pathname}`}>
            <label>
              <input
                className={`${styles.input}`}
                type='text'
                id='input'
                name='input'
                placeholder='Search...'
                value={search.input}
                onChange={this.updateTextField}
              />
            </label>
            <button className={styles.button} type='submit' disabled={!search.input}>Search</button>
          </form>
        </div>
        <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.results}`}>
          {(item && isError === false) ?
            <p className={styles.link}>Search results:
              {item.map(el => {
              const category = el.url.split('/', -2);

              return(
                <a href={`${process.env.PUBLIC_URL}/${category[4]}/${el.name ? el.name.replaceAll(' ', '-') : el.title.replaceAll(' ', '-')}`} key={el.url}>{el.name || el.title}</a>
              )
              })}
          </p> : <p className={styles.link}>An error occured during your search. Please try again.</p>}
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  item: PropTypes.array,
  loadSearchedItem: PropTypes.func,
};

export default Filters;
