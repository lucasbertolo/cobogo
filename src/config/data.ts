import { CardProps } from '../components/Card/CardContentUser';

// #region [TENANTS]
export const TOTAL_ROOMS = 4;

export const TENANTS_SUBTEXT = 'Não há salas disponíveis para locação no momento, mas você pode fazer parte da nossa lista de espera enviando um e-mail para: espacocobogopiracicaba@gmail.com';

export const CURRENT_TENANTS: CardProps[] = [
  {
    name: 'Laís M. Salvador',
    job: 'Arquiteta e Interiores',
    phone: '19 98132-0147',
    brandColor: '#a08c91',
    srcImg: './images/profile/1.jpg',
    socialMedia: {
      instagram: {
        link: 'https://www.instagram.com/lms_arquitetura/',
        label: 'lms_arquitetura',
      },
      website: 'https://lms-arquitetura.com',
    },
    roomNumber: 1,
  },
  {
    name: 'Aline Maranha',
    job: 'Nutricionista',
    brandColor: 'green',
    phone: '19 99900-5715',
    srcImg: './images/profile/2.png',

    socialMedia: {
      instagram: {
        link: 'https://www.instagram.com/nutricionista.alinemaranha/',
        label: 'nutricionista.alinemaranha',
      },
    },
    roomNumber: 2,
  },
  {
    name: 'Tauri Solar',
    job: 'Empresa de Energia Solar',
    srcImg: './images/profile/3.png',
    phone: '19 97116-3389',
    brandColor: '#FFFFFF',
    roomNumber: 3,
    socialMedia: {
      instagram: {
        link: 'https://www.instagram.com/tauri_energia_solar/',
        label: 'tauri_energia_solar',
      },
      website: 'https://www.taurisolar.com',
    },
  },
  {
    name: 'Ester Sanson',
    job: 'Psicóloga',
    phone: '19 99216-9099',
    brandColor: '#FF2103',
    srcImg: './images/profile/4.png',
    roomNumber: 4,
    socialMedia: {
      instagram: {
        link: 'https://www.instagram.com/estersansonpsicologa/',
        label: 'estersansonpsicologa',
      },
    },
    subTenant: {
      name: 'Tauri Solar',
      job: 'Empresa de Energia Solar',
      srcImg: './images/profile/3.png',
      phone: '19 97116-3389',
      brandColor: '#FFFFFF',
      roomNumber: 3,
      socialMedia: {
        instagram: {
          link: 'https://www.instagram.com/tauri_energia_solar/',
          label: 'tauri_energia_solar',
        },
        website: 'https://www.taurisolar.com',
      },
    },
  },
];

// #endregion

// #region [GALLERY]

export const GALLERY_IMAGES = [
  {
    src: './images/rooms/1.jpg',
    alt: 'entrada',
  },
  {
    src: './images/rooms/2.jpeg',
    alt: 'entrada distancia',
  },
  {
    src: './images/rooms/3.jpg',
    alt: 'entrada noite',
  },
  {
    src: './images/rooms/4.jpeg',
    alt: 'hall',
  },
  {
    src: './images/rooms/5.jpeg',
    alt: 'recepcao',
  },
  {
    src: './images/rooms/6.jpeg',
    alt: 'flor',
  },
  {
    src: './images/rooms/7.jpeg',
    alt: 'jardim',
  },
  {
    src: './images/rooms/8.jpeg',
    alt: 'jardim',
  },
  {
    src: './images/rooms/9.jpeg',
    alt: 'flor',
  },
];

// #endregion
