import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Grounds from './src/screens/Grounds';
import Notification from './src/screens/Notification';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import { MyStack } from './routes/homestack';
import Profile from './src/screens/Profile';
import Tournaments from './src/screens/Tournaments';
import RLCA from './src/screens/RLCA';
import PSL from './src/screens/PSL';
import Test from './src/screens/test';

const App = () => {
  return (
    
    //  <MyStack>
    //    <SignUp/>
    //   </MyStack>
    <RLCA/>
  );
}
export default App;
