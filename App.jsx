import { AuthProvider } from './components/context/AuthContext';
import StackNavigator from './components/StackNavigator';

export default function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
}
