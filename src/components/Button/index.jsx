import { Container } from './styles';

export function Button({ title, loading = false, ...rest }) {

  return (
    <Container 
      type="button"
      disabled={loading}  
      {...rest}
    >
      {loading ? `(${title}) este botão esta desabilitado` : title}
    </Container>
  )
}