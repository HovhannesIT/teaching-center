import { Container } from './styles';
import { CompT } from './types';

export const Cart: CompT = (props) => {
  const { children } = props;
  return (
    <Container>
      {children}
    </Container>
  )
}