// payload and db access
import type { Access, FieldAccess } from "payload";
import type { User } from "@/payload-types";

// Return true or false based on if the user has an admin role
export const isAdmin: Access<User> = ({ req: { user } }) => Boolean(user?.role === "admin");

// Return true or false based on if the user has an admin role
export const isAdminFieldLevel: FieldAccess<User> = ({ req: { user } }) => Boolean(user?.role === "admin");
