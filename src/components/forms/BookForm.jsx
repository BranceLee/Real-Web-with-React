import React, { Component } from 'react';
import { Form, Grid, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class BookForm extends Component {
	state = {
		book: {
			goodreadsId: this.props.book.goodreadsId,
			title: this.props.book.title,
			authors: this.props.book.authors,
			cover: this.props.book.covers[0],
			pages: this.props.book.pages
		},
		covers: this.props.book.covers,
		index: 0,
		errors: {},
		loading: false
	};

	componentWillReceiveProps(props) {
		this.setState({
			book: {
				goodreadsId: props.book.goodreadsId,
				title: props.book.title,
				authors: props.book.authors,
				cover: props.book.covers[0],
				pages: props.book.pages
			},
			covers: props.book.covers
		});
	}

	onChange = (e) => {
		this.setState({ book: { [e.target.name]: e.target.value }, loading: false });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { book, errors } = this.state;
		this.validate(book);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props.addBook(this.state.book);
			// .catch((err) => this.setState({ errors: err.response.data.errors, loading: false }));
		}
	};

	validate = (book) => {
		const errors = {};
		if (!book) {
			errors.book = 'Invalid book';
		}
		return errors;
	};

	changeCover = () => {
		let { index, covers } = this.state;
		index = index + 1 >= covers.length ? 0 : index + 1;
		this.setState({ index, book: { ...this.state.book, cover: covers[index] } });
	};

	render() {
		const { loading, book, errors } = this.state;
		return (
			<div>
				<Form className="addBookForm" onSubmit={this.onSubmit} loading={loading}>
					<Grid columns={2} stackable>
						<Grid.Row>
							<Grid.Column>
								<Form.Field>
									<label style={{ color: '#fff' }}>Title</label>
									<input
										type="text"
										name="tilte"
										value={book.title}
										onChange={this.onChange}
										placeholder="Title"
									/>
									{errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
								</Form.Field>

								<Form.Field>
									<label style={{ color: '#fff' }}>Author</label>
									<input
										type="text"
										name="authors"
										value={book.authors}
										onChange={this.onChange}
										placeholder="Author"
									/>
									{errors.authors && <p style={{ color: 'red' }}>{errors.authors}</p>}
								</Form.Field>

								<Form.Field>
									<label style={{ color: '#fff' }}>Pages</label>
									<input
										type="text"
										name="pages"
										value={book.pages === undefined ? 'Loding ...' : book.pages}
										onChange={this.onChange}
										placeholder="Title"
									/>
									{errors.pages && <p style={{ color: 'red' }}>{errors.pages}</p>}
								</Form.Field>
							</Grid.Column>

							<Grid.Column>
								<Image className="addBookCover" src={book.cover} />
								{this.state.covers.length > 1 && <a onClick={this.changeCover}>更换封面</a>}
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Button primary onClick={this.onSubmit}>
								Save Data
							</Button>
						</Grid.Row>
					</Grid>
				</Form>
			</div>
		);
	}
}

BookForm.propTypes = {
	addBook: PropTypes.func.isRequired,
	book: PropTypes.shape({
		goodreadsId: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		authors: PropTypes.string.isRequired,
		covers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
		pages: PropTypes.number
	}).isRequired
};

export default BookForm;
