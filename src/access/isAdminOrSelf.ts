// payload and db access
import type { Access } from "payload";
import type { User } from "@/payload-types";

// access control functions
import { isAdmin } from "./isAdmin";

// If the user has the role of "admin" or any other type of user
export const isAdminOrSelf: Access<User> = (args) => {
  // Needs to be logged in first
  const {
    req: { user },
  } = args;
  if (!user) return false;

  // If any other type of user, only provide access to themselves
  return isAdmin(args) || { id: { equals: user.id } };
};
