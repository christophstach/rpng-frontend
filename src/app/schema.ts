

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation {
  login: string | null;
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
  register: RegisterMutation_register | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VerifyEmailMutation
// ====================================================

export interface VerifyEmailMutation_verifyEmail {
  email: string;
  firstName: string | null;
  lastName: string | null;
}

export interface VerifyEmailMutation {
  verifyEmail: VerifyEmailMutation_verifyEmail | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserListComponentQuery
// ====================================================

export interface UserListComponentQuery_users {
  id: string;
  username: string;
  email: string;
  roles: (UserRole | null)[] | null;
  firstName: string | null;
  lastName: string | null;
}

export interface UserListComponentQuery {
  users: (UserListComponentQuery_users | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  ADMIN = "ADMIN",
  SUPERADMIN = "SUPERADMIN",
  USER = "USER",
}

//==============================================================
// END Enums and Input Objects
//==============================================================