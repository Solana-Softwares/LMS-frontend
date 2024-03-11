// // userContext.ts
// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// interface UserContextType {
//   username: string;
//   setUsername: React.Dispatch<React.SetStateAction<string>>;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// interface UserProviderProps {
//   children: ReactNode;
// }

// export function UserProvider({ children }: UserProviderProps) {
//   const [username, setUsername] = useState<string>('John Doe');

//   // useEffect(() => {
//   //   // Fetch user data or set it from your authentication provider (e.g., NextAuth)
//   //   // Replace this with your actual user data fetching logic
//   //   const userData = {
//   //     name: 'John Doe', // Replace with your user's name
//   //     // Add other user properties here
//   //   };
//   //   setUsername(userData.name);
//   // }, []);

//   return (
//     <UserContext.Provider value={{ username, setUsername }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUser() {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// }
