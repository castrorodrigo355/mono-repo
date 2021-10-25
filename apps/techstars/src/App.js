import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

const App = () => {
	const { loginWithRedirect, isAuthenticated, isLoading, logout, user } =
		useAuth0();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	console.log("AUTH: ", isAuthenticated, " USER: ", user);

	return (
		<div className="App">
			<div>{JSON.stringify(isAuthenticated)}</div>
			{isAuthenticated ? (
				<div>
					<div>
						<img src={user.picture} alt="..." />
					</div>
					<button onClick={() => logout({ returnTo: window.location.origin })}>
						LOG OUT
					</button>
				</div>
			) : (
				<div>
					<div>TECHSTARS</div>
					<button onClick={() => loginWithRedirect()}>SIGN IN</button>
				</div>
			)}
		</div>
	);
};

export default App;
