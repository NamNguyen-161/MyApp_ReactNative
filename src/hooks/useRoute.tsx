import {useRoute as _useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

export type IRouteParams<T extends object | undefined> = RouteProp<
  {params: T},
  'params'
>;

export default function useRoute<T extends object | undefined>() {
  return _useRoute<IRouteParams<T>>();
}
