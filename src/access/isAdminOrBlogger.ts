// payload and db access
import type { Access } from "payload";
import type { User } from "@/payload-types";

// access control functions
import { isAdmin } from "./isAdmin";
import { isBlogger } from "@/access/isBlogger";

// Does the user have the role of "admin" or "blogger"?
export const isAdminOrBlogger: Access<User> = (args) => isAdmin(args) || isBlogger(args);
