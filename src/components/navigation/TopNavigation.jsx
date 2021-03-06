import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Image, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import * as action from '../../actions/auth';

const TopNavigation = ({ user, logout, hasBooks }) => (
	<Menu secondary pointing>
		<Menu.Item as={Link} to="/dashboard" style={{ color: '#fff' }}>
			<Button primary>
				<Icon name="exchange" />
				<Icon name="home" />
			</Button>
		</Menu.Item>

		<Menu.Menu position="right">
			<Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
				<Dropdown.Menu>
					<Dropdown.Item onClick={logout}>LogOut</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Menu>
	</Menu>
);

TopNavigation.propTypes = {
	user: PropTypes.shape({
		email: PropTypes.string.isRequired
	}).isRequired
};

function mapStateToProps(state) {
	return { user: state.user };
}

export default connect(mapStateToProps, { logout: action.logout })(TopNavigation);
