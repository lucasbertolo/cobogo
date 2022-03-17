import { BoxProps } from '@chakra-ui/react';
import { AboutSection } from './AboutSection';
import { HeaderCard } from './HeaderCard';
import { SocialMediaSection } from './SocialMediaSection';
import { CardProps, SubTenantButtons } from './SubTenantButtons';

interface CardContentUserProps {
  tenant: CardProps;
  changeActiveUser: () => void;
  tenantActive: boolean;
}

export default function CardContentUser({
  tenant,
  changeActiveUser,
  tenantActive,
}: CardContentUserProps) {
  const {
    name, socialMedia, job, phone, srcImg, subTenant,
  } = tenant;

  const styleTenantBox: BoxProps = {
    backgroundColor: 'rgba(255, 242, 18, 0.2)',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    borderRightRadius: 5,
    borderBottomColor: '#fff212',
    borderBottomWidth: 4,
    borderBottomStyle: 'solid',
  };

  const tenantStyle = tenantActive ? styleTenantBox : {};
  const subTenantStyle = tenantActive ? {} : styleTenantBox;

  const displayName = tenantActive ? name : tenant.subTenant.name;
  const displaySocialMedia = tenantActive
    ? socialMedia
    : tenant.subTenant.socialMedia;
  const displayJob = tenantActive ? job : tenant.subTenant.job;
  const displayPhone = tenantActive ? phone : tenant.subTenant.phone;
  const displaySrcImg = tenantActive ? srcImg : tenant.subTenant.srcImg;

  return (
    <>
      <HeaderCard name={displayName} srcImg={displaySrcImg} job={displayJob} />

      <AboutSection about="huasdfiuhsfdiohhiusdafhiu" />

      <SocialMediaSection
        socialMedia={displaySocialMedia}
        phone={displayPhone}
        hasSubTenant={!!subTenant}
      />

      {subTenant && (
        <SubTenantButtons
          changeActiveUser={changeActiveUser}
          name={name}
          subTenant={subTenant}
          subTenantStyle={subTenantStyle}
          tenantStyle={tenantStyle}
        />
      )}
    </>
  );
}
