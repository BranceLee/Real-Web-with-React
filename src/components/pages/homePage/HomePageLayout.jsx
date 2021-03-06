import React, { Component } from 'react';
import LayoutLeft from './homePageLayout/LayoutLeft';
import LayoutRight from './homePageLayout/LayoutRight';
import { Segment, Grid } from 'semantic-ui-react';
import FeedbackForm from './homePageLayout/FeedbackForm';
import BookLibrary from './homePageLayout/BookLibray';
import BookContent from './homePageLayout/BookContent';
import LoginLeftLayout from '../../login/LoginLeftLayout';

class HomePageLayout extends Component {
	state = {};
	render() {
		return (
			<div>
				<Segment style={{ padding: '6em 0' }} vertical>
					<Grid container>
						<Grid.Row>
							<Grid.Column width={10}>
								<LayoutLeft />
							</Grid.Column>

							<Grid.Column width={6}>
								<LayoutRight />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<BookContent />
				<BookLibrary />
				<LoginLeftLayout />
				<FeedbackForm />
			</div>
		);
	}
}

export default HomePageLayout;
