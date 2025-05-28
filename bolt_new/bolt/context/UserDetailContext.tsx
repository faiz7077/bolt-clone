// // "use client";

// // import { createContext } from "react";

// // export const UserDetailContext = createContext([]);


// "use client";

// import { createContext, useState, ReactNode } from "react";

// // Define the user detail type
// interface UserDetail {
//   name?: string;
//   email?: string;
//   picture?: string;
//   // add other properties you expect from Google OAuth
// }

// // Define the context type
// interface UserDetailContextType {
//   userDetail: UserDetail | undefined;
//   setUserDetail: (userDetail: UserDetail | undefined) => void;
// }

// // Create context with proper default value
// export const UserDetailContext = createContext<UserDetailContextType | null>(null);


// // Create provider component
// export const UserDetailProvider = ({ children }: { children: ReactNode }) => {
//   const [userDetail, setUserDetail] = useState<UserDetail | undefined>(undefined);

//   return (
//     <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
//       {children}
//     </UserDetailContext.Provider>
//   );
// };

"use client";

import { createContext, useState, ReactNode } from "react";

interface UserDetail {
  name?: string;
  email?: string;
  picture?: string;
}

interface UserDetailContextType {
  userDetail: UserDetail | undefined;
  setUserDetail: (userDetail: UserDetail | undefined) => void;
}

export const UserDetailContext = createContext<UserDetailContextType | null>(null);

export const UserDetailProvider = ({ children }: { children: ReactNode }) => {
  const [userDetail, setUserDetail] = useState<UserDetail | undefined>(undefined);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
};
