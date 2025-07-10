import { useNavigate } from "react-router";
import Header from "../../components/Header";
import { MenuButton, MenuContainer, MenuTitle, ServicesContainer } from "./style";

import {
  CalendarCheck,
  Video,
  FileText,
  User,
  Clock,
  Bell,
  Layers,
  LogOut,
  Info
} from 'lucide-react';

const Services = () => {
    const navigate = useNavigate();

    return (
        <ServicesContainer>
            <Header title="Smartt Pés" isHome={true} />
            <MenuTitle>Menu Inicial</MenuTitle>
            <MenuContainer>
                <MenuButton onClick={() => navigate('/agendamento')}>
                    <CalendarCheck size={24} color="#4680ff" />
                    Agendamento                    
                </MenuButton>
                <MenuButton onClick={() => navigate('/teleconsulta')}>
                    <Video size={24} color="#27ae60" />
                    Teleconsulta
                </MenuButton>
                <MenuButton onClick={() => navigate('/podomoto')}>
                    <Bell size={24} color="#e67e22" />
                    PodoMoto
                </MenuButton>
                <MenuButton onClick={() => navigate('/servicos')}>
                    <Layers size={24} color="#16a085" />
                    Serviços
                </MenuButton>
                <MenuButton onClick={() => navigate('/planos')}>
                    <FileText size={24} color="#b500fd" />
                    Planos
                </MenuButton>
                <MenuButton onClick={() => navigate('/perfil')}>
                    <User size={24} color="#f1c40f" />
                    Perfil
                </MenuButton>
                <MenuButton onClick={() => navigate('/historico')}>
                    <Clock size={24} color="#5c3f68" />
                    Histórico
                </MenuButton>
                <MenuButton onClick={() => navigate('/sobre')}>
                    <Info size={24} color="#347bd8" />
                    Sobre
                </MenuButton>
                <MenuButton onClick={() => navigate('/')}>
                    <LogOut size={24} />
                    Sair
                </MenuButton>
            </MenuContainer>
        </ServicesContainer>
    )
}

export default Services;