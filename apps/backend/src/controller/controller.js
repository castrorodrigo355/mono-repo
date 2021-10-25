import { redirectClients } from "../constants/constants";

const findClient = (list, email) => {
	const client = list.find((c) => c.company === email);
	return client;
};

export const getUsers = (req, res) => {
	res.json({ Users: "GET USERS !!!" });
};

export const postUsers = (req, res) => {
	const { email } = req.body;
	const client = findClient(redirectClients, email);
	res.json(client);
};
