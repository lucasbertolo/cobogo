import { Global } from "@emotion/react";

export default function Fonts() {
  return (
    <Global
      styles={`
        @font-face{
          font-family:"fidena-regular";
          src: url("./fonts/Fidena.otf") format("opentype"),
          url("./fonts/Fidena.otf") format("truetype");
        }
       
        /* latin */
        @font-face {
          font-family: 'Phrasa-ExtraLight';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('./fonts/Phrasa-ExtraLight.woff2') format('woff2'), url('./fonts/Phrasa-ExtraLight.woff') format('woff');
        }
        `}
    />
  );
}
