import './commons/i18n'
import BoardScreen from './containers/Board';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Board">
        <Stack.Screen 
          name="Board"
          component={BoardScreen}
          options={{title: 'Board'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}