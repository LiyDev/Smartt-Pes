import {
  PerfilContainer,

} from './style';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Mail, Phone, MapPin, Heart, CalendarDays, LogOut, ChevronRight } from 'lucide-react';

const Perfil = () => {
  return (
    <PerfilContainer>
      <Header title="Perfil" />

     

      <Footer />
    </PerfilContainer>
  );
};

export default Perfil;
