import { Header } from './styles';

import Logotipo from '@/components/Logotipo';

function Component() {
  return (
    <Header>
      <nav>
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Projetos</a></li>
          <Logotipo />
          <li><a href="">Sobre mim</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </nav>
    </Header>
  );
}

export default Component;
