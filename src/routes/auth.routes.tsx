import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Question } from '@screens/Question';
import { ResultQuestion } from '@screens/ResultQuestion';
import { Congratulations } from '@screens/Congratulations';
import { ReportsQuestion } from '@screens/ReportsQuestion';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Question" component={Question} />
      <Screen name="ResultQuestion" component={ResultQuestion} />
      <Screen name="Congratulations" component={Congratulations} />
      <Screen name="ReportsQuestion" component={ReportsQuestion} />
    </Navigator>
  );
}
