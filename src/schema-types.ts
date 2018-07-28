

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login {
  /**
   * Login to the application.
   */
  login: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
  id: string;
  username: string;
  email: string;
  roles: (UserRole | null)[] | null;
  firstName: string | null;
  lastName: string | null;
}

export interface Register {
  /**
   * Registers a new user to the application.
   */
  register: Register_register | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Verify
// ====================================================

export interface Verify_verify {
  email: string;
  firstName: string | null;
  lastName: string | null;
}

export interface Verify {
  /**
   * Verifies a user by a  given token.
   */
  verify: Verify_verify | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserList
// ====================================================

export interface UserList_getUsers {
  id: string;
  username: string;
  email: string;
  roles: (UserRole | null)[] | null;
  firstName: string | null;
  lastName: string | null;
}

export interface UserList {
  /**
   * Get a list of all users.
   * 
   * Roles: Admin, Superadmin
   */
  getUsers: (UserList_getUsers | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsersQuery
// ====================================================

export interface GetUsersQuery_getUsers {
  id: string;
  email: string;
  username: string;
  roles: (UserRole | null)[] | null;
  firstName: string | null;
  lastName: string | null;
}

export interface GetUsersQuery {
  /**
   * Get a list of all users.
   * 
   * Roles: Admin, Superadmin
   */
  getUsers: (GetUsersQuery_getUsers | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * All available user roles.
 */
export enum UserRole {
  ADMIN = "ADMIN",
  SUPERADMIN = "SUPERADMIN",
  USER = "USER",
}

//==============================================================
// END Enums and Input Objects
//==============================================================