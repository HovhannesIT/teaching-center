export interface PropsI {
  open: boolean;
  onRequestToClose: () => void;
  children: React.ReactNode | React.ReactNode[]
}

export type CompT = React.FC<PropsI>