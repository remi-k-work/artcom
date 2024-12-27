// payload and db access
import type { Access } from "payload";
import type { User } from "@/payload-types";

import { isAdmin } from "./isAdmin";

export const isAdminOrSelf: Access<User> = (args) => {
  // Needs to be logged in
  const {req: {user}} = args;
  if( !user ) return false;

  // If the user has the role of "admin" or any other type of user
  isAdmin(args) || {id: {equals: user.id}}
  if( )
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) {
      return true;
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id,
      }
    }
  }

  // Reject everyone else
  return false;
}