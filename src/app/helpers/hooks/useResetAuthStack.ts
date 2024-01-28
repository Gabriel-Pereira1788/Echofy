import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from 'src/app/router/AuthStack';

export function useResetAuthStack() {
  const navigation = useNavigation();

  function reset(params: AuthStackParamList['ReadyToGoScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'SignInScreen',
        },
        {name: 'ReadyToGoScreen', params},
      ],
    });
  }

  return {
    reset,
  };
}
