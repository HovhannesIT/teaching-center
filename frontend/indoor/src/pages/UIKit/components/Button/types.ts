import { ReactNode } from "react"

export interface PropsI {
  type?: 'primary' | 'secondary',
  loading?: boolean,
  children: ReactNode | ReactNode[]
}

export type CompT = React.FC<PropsI>


