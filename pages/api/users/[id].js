// // page/api/users/[id].js
// // ----------------------------------------
// import nc from "next-connect";
// import { checkAccess, userAuth } from "server/middlewares";

// const handler = nc()
// 	.use(userAuth) // injects session into req.session
// 	.use(checkAccess("users", "read:own"))
// 	.use(checkAccess("profile", "read:own")) // you can chain multiple checks
// 	.get((req, res) => {
// 		// get user profile from DB
// 		return res.send({
// 			ok: true,
// 			data: user,
// 		});
// 	});

// export default handler;

// page/api/users/[id].js
// ----------------------------------------
import nc from "next-connect";
import { checkAccess, userAuth } from "../../server/middlewares";

const accessHandler = nc()
	.use(userAuth) // injects session into req.session
	.get(checkAccess("users", "read:own"), (req, res) => {
		// get user profile from DB
		return res.send({
			ok: true,
			data: user,
		});
	})
	.put(checkAccess("users", "update:own"), (req, res) => {
		// update user profile in DB
		return res.send({
			ok: true,
			data: user,
		});
	})
	.delete(checkAccess("users", "delete:any"), (req, res) => {
		// delete user profile from DB
		return res.send({
			ok: true,
			data: {},
		});
	});

export default accessHandler;
