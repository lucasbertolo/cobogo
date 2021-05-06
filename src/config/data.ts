import { CardProps } from '../components/Card';

//#region [TENANTS]
export const TOTAL_ROOMS = 4;

export const TENANTS_SUBTEXT = `Com um ambiente planejado, nosso espaço está pronto pra 
atender diversos tipos de profissionais, e proporcionar a oportunidade deles 
desempenharem seu trabalho em um ambiente leve, descontraído e bem preparado. 
Conheça os nossos atuais colegas e suas respectivas áreas. `;

export const CURRENT_TENANTS: CardProps[] = [
  {
    name: 'LMS Arquitetura',
    job: 'Arquiteta, Urbanista e design de interiores',
    email: 'lms-arquitetura@gmail.com',
    brandColor: '#a08c91',
  },
  {
    name: 'Aline',
    job: 'Nutricionista',
    email: 'aasdasdsdaasd',
    brandColor: 'green',
  },
  {
    name: 'Ester ?',
    job: 'Psicóloga',
    email: 'lms-arquitetura@gmail.com',
    brandColor: '#FFFFFF',
  },
];

//#endregion

//#region [GALLERY]

export const GALLERY_IMAGES = [
  {
    src:
      'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
    alt: 'sala',
  },
  {
    src:
      'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
    alt: 'recepção',
  },
  {
    src:
      'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
    alt: 'jardim',
  },
];

//#endregion
