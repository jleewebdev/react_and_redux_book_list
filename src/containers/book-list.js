import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
          >
            {book.title}
          </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // set props
  return {
    books: state.books
  };
}

// Anything return from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // when slectBook is called, the result should be 
  // passed to all our our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)