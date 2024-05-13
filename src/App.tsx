import { SendContextProvider } from './contexts/SendContext';
import { UserContextProvider } from './contexts/UserContext';
import { HomePage } from './HomePage';

export const App = () => {
  return (
    <UserContextProvider>
      <SendContextProvider>
        <HomePage />
      </SendContextProvider>
    </UserContextProvider>
  );
}

