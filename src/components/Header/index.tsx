import * as S from './style'
import logo from '../../assets/images/logo.svg'

export type Props = {
  page: 'home' | 'perfil'
}

const Header = ({ page }: Props) => (
  <S.HeaderBar page={page}>
    {page === 'home' ? (
      <>
        <S.HeaderLogo page={page} src={logo} alt="Logo" />
        <S.HeaderText page={page}>
          Viva experiências gastronômicas no conforto da sua casa
        </S.HeaderText>
      </>
    ) : (
      <div>
        <S.HeaderLink to={'/'}>Restaurantes</S.HeaderLink>
        <S.HeaderLogo page={page} src={logo} alt="Logo" />
        <S.HeaderLink to={'/'} align="right">
          0 produto(s) no carrinho
        </S.HeaderLink>
      </div>
    )}
  </S.HeaderBar>
)

export default Header
