import React from 'react'
import '../Style.css'
import axios from 'axios'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: ''
    }
  }

  fetchSearchResults = (updatedPageNo = '', query) => {
    const pageNumber = updatedPageNo ? `TODO{UPDATED PAGE NUMBER}` : '';
    // By default the limit of results is 20
    const searchUrl = `TODO{PROVIDE SEARCH URL FOR "CODENAME: HIVE"}`;
    if (this.cancel) {
      // Cancel the previous request before making a new request
      this.cancel.cancel();
    }
    // Create a new CancelToken
    this.cancel = axios.CancelToken.source();
    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.hits.length ?
          'There are no more search results. Please try a new search.' :
          '';
        this.setState({
          results: res.data.hits,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: 'Failed to fetch results. Please check network',
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({
      query,
      loading: true,
      message: ''
    });
  };

  renderSearchResults = () => {
    const {
      results
    } = this.state;
    if (Object.keys(results).length && results.length) {
      return ( <
        div className = "results-container" > {
          results.map((result) => {
            return ( <
              a key = {
                result.id
              }
              href = {
                result.previewURL
              }
              className = "result-items" >
              <
              h6 className = "image-username" > {
                result.user
              } < /h6> <
              div className = "image-wrapper" >
              <
              img className = "image"
              src = {
                result.previewURL
              }
              alt = {
                result.user
              }
              /> <
              /div> <
              /a>
            );
          })
        } <
        /div>
      );
    }
  };

  render() {
    const {
      query
    } = this.state
    return ( <
      div className = "container" > {
        /*Heading*/ } <
      h2 className = "heading" > Live Search "Codename: Hive" < /h2> {
        /*Search Input*/ } <
      label className = "search-label"
      htmlFor = "search-input" >
      <
      input type = "text"
      name = "query"
      value = ""
      id = "search-input"
      placeholder = "Search..."
      onChange = {
        this.handleOnInputChange
      }
      /> <
      /label> <
      /h2> <
      /div>
    )
  }
}

export default Search
