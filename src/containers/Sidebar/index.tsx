import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Edilson Bispo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        EdilsonBispoCEO
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack Python
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
