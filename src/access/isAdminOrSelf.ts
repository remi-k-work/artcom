// payload and db access
import type { Access } from "payload";
import type { User } from "@/payload-types";

// access control functions
import { isLoggedIn } from "./isLoggedIn";
import { isAdmin } from "./isAdmin";

// If the user has the role of "admin" or any other type of user (provide access to themselves)
export const isAdminOrSelf: Access<User> = (args) => isLoggedIn(args) && (isAdmin(args) || { id: { equals: args.req.user!.id } });
