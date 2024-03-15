import React, { Component } from "react";
import Books from "./Books";

export default class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      year: "",
      books: [],
    };

    this.titleHandler = this.titleHandler.bind(this);
    this.authorHandler = this.authorHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }
  authorHandler(event) {
    this.setState({
      author: event.target.value,
    });
  }
  yearHandler(event) {
    this.setState({
      year: event.target.value,
    });
  }
  submitHandler(event) {
    event.preventDefault();

    let { title, author, year } = this.state;

    if (title && author && year) {
      let newBook = {
        id: this.state.books.length + 1,
        title,
        author,
        year,
      };
      this.setState({ books: [...this.state.books, newBook] });

      this.setState({
        title: "",
        author: "",
        year: "",
      });
    }
  }

  render() {
    return (
      <>
        <form className="w-10/12 mx-auto " onSubmit={this.submitHandler}>
          <div className="w-full mb-2 text-xl text-gray-600">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="w-full h-10 border-2 rounded-md"
              value={this.state.title}
              onChange={this.titleHandler}
            />
          </div>
          <div className="w-full mb-2 text-xl text-gray-600">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              className="w-full h-10 border-2 rounded-md"
              value={this.state.author}
              onChange={this.authorHandler}
            />
          </div>
          <div className="w-full mb-2 text-xl text-gray-600">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              className="w-full h-10 border-2 rounded-md"
              value={this.state.year}
              onChange={this.yearHandler}
            />
          </div>
          <input
            type="submit"
            className="w-full h-12 mt-8 text-xl font-bold text-white rounded-md bg-lime-900"
          />
        </form>
        <table className="w-10/12 mx-auto mt-8">
          <thead className="h-14 border-y-2">
            <tr className="text-xl text-gray-600">
              <th>num</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <Books {...book} key={book.id} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
