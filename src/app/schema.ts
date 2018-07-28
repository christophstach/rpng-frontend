

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation {
  login: string | null;  // Login to the application.
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register {
  id: string;
  username: string;
  email: string;
  roles: (UserRole | null)[] | null;
  firstName: string | null;
  lastName: string | null;
}

export interface RegisterMutation {
  register: RegisterMutation_register | null;  // Registers a new user to the application.
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VerifyMutation
// ====================================================

export interface VerifyMutation_verify {
  email: string;
  firstName: string | null;
  lastName: string | null;
}

export interface VerifyMutation {
  verify: VerifyMutation_verify | null;  // Verifies a user by a  given token.
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserListComponentQuery
// ====================================================

export interface UserListComponentQuery_getUsers {
  id: string;
  username: string;
  email: string;
  roles: (UserRole | null)[] | null;
  firstName: string | null;
  lastName: string | null;
}

export interface UserListComponentQuery {
  getUsers: (UserListComponentQuery_getUsers | null)[] | null;  // Get a list of all users.  Roles: Admin, Superadmin
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsersQuery
// ====================================================

export interface getUsersQuery_getUsers {
  id: string;
  email: string;
  username: string;
  roles: (UserRole | null)[] | null;
  firstName: string | null;
  lastName: string | null;
}

export interface getUsersQuery {
  getUsers: (getUsersQuery_getUsers | null)[] | null;  // Get a list of all users.  Roles: Admin, Superadmin
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// All available user roles.
export enum UserRole {
  ADMIN = "ADMIN",
  SUPERADMIN = "SUPERADMIN",
  USER = "USER",
}

//==============================================================
// END Enums and Input Objects
//==============================================================