import { ReactNode } from "react";

type typeT = 'alert' | 'confirm';
type actionType = 'ok' | 'cancel' | 'confirm' 

export interface PropsI {
  visible: boolean;
  type: typeT;
  children: ReactNode | ReactNode[],
  onAction: (action: actionType) => void
}

export type CompT = React.FC<PropsI>