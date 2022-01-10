// server/middlewares/checkAccess.js
// ----------------------------------------
import { ac } from "../services"; // load ACL

export const checkAccess =
	(resource, action, possession) => (req, res, next) => {
		let permission;
		try {
			permission = ac.permission({
				role: req.session?.user?.role, // we'll see later about that
				resource,
				action,
				possession,
			});
		} catch {
			// `ac.permission` throws if role is not a string
			permission = { granted: false };
		}

		// return 403 if access is denied
		if (!permission.granted) {
			return res.status(403).json({
				ok: false,
				message: "You are not authorized to access this resource",
			});
		}

		return next();
	};
