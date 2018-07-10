import React from 'react';
import { withRouter } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';

const handleSignout = (client, history) => {
	localStorage.removeItem('token');
	client.resetStore();
	history.push('/');
};

const Signout = ({ history }) => (
	<ApolloConsumer>
		{client => {
			return (
				<button onClick={handleSignout.bind(this, client, history)}>
					Signout
				</button>
			);
		}}
	</ApolloConsumer>
);

export default withRouter(Signout);
