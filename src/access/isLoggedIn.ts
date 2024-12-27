// payload and db access
import type { Access } from "payload";
import type { User } from "@/payload-types";

// Return true if user is logged in, false if not
export const isLoggedIn: Access<User> = ({ req: { user } }) => Boolean(user);
