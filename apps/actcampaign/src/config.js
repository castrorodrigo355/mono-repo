const CLIENT_ID = process.env.CLIENT_ID || "0oa29f0qfx7vjHeJB5d7";
const ISSUER =
	process.env.ISSUER || "https://dev-46948349.okta.com/oauth2/default";
const OKTA_TESTING_DISABLEHTTPSCHECK =
	process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const REDIRECT_URI = `${window.location.origin}/auth/login/callback`;

// eslint-disable-next-line
export default {
	oidc: {
		clientId: CLIENT_ID,
		issuer: ISSUER,
		redirectUri: REDIRECT_URI,
		scopes: ["openid", "profile", "email"],
		pkce: true,
		disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
	},
	resourceServer: {
		messagesUrl: "http://localhost:8000/api/messages",
	},
};
