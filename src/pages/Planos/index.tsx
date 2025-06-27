import {
  PlanosContainer,
  PlanoCard,
  PlanoTitulo,
  PlanoPreco,
  PlanoAssinar,
  BeneficiosList,
  BeneficioItem,
  Wrapper
} from './style';
import planosMock from '../../services/planosMock.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Planos = () => {
  return (
    <PlanosContainer>
        <Header title='Planos' />
        <Wrapper>
        {planosMock.map((plano, index) => (
            <PlanoCard key={index}>
                <PlanoTitulo>{plano.nome}</PlanoTitulo>
                <PlanoPreco>R$ {plano.preco}<span>/mês</span></PlanoPreco>
                <BeneficiosList>
                    {plano.beneficios.map((beneficio, i) => (
                    <BeneficioItem key={i}>✓ {beneficio}</BeneficioItem>
                    ))}
                </BeneficiosList>
                <PlanoAssinar>Assinar</PlanoAssinar>
            </PlanoCard>
        ))}
        </Wrapper>
        <Footer position='sticky'/> 
    </PlanosContainer>
  );
};

export default Planos;
