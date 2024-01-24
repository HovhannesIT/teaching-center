import { ReactNode } from "react"

export interface PropsI {
  header: ReactNode | ReactNode[] | string,
  collapse: ReactNode | ReactNode[] | string,
  children: ReactNode | ReactNode[],
  action?: 'header' | 'body',
  collapseDefaultState?: boolean
}

export type CompT = React.FC<PropsI>


