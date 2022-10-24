type MainNameStack = 'HOME' | 'ABOUT';

export type MainStack = {
  HOME: undefined;
  ABOUT: undefined;
};

export type StackParams = MainStack & {
  MAIN: undefined | ({screen: MainNameStack} & Partial<RouteProps>);

  LOGIN: undefined;
  REGISTER: undefined | Partial<RouteProps>;
};

export interface RouteProps {
  [key: string]: any;
}
