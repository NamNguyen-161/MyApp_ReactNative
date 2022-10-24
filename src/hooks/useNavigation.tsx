import {useNavigation as _useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParams} from '../navigation/types';

type NavigationProps = StackNavigationProp<StackParams>;
export default function useNavigation() {
  return _useNavigation<NavigationProps>();
}
