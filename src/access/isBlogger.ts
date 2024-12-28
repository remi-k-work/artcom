// payload and db access
import type { Access, FieldAccess } from "payload";
import type { User } from "@/payload-types";

// Return true or false based on if the user has a blogger role
export const isBlogger: Access<User> = ({ req: { user } }) => Boolean(user?.role === "blogger");

// Return true or false based on if the user has a blogger role
export const isBloggerFieldLevel: FieldAccess<User> = ({ req: { user } }) => Boolean(user?.role === "blogger");
