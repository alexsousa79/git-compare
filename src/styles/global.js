import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #1a4840;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`;

// :root {
//   #  ;
//   #397F69 - fundo geral
//   #5F7F75
//   #297673;
//   #339693;
//   #3db7b3;
//   #56c8c5;
//   #75d3d0;
// }
// --color1: #184043;
// --color2: #246569;
// --color3: #318a90;
// --color4: #3cb0b7;
// --color5: #5cc4cb;
// :root {
//   --color1: #1a4840;
//   --color2: #266f62;
//   --color3: #339685;
//   --color4: #3ebda7;
//   --color5: #62cdba;
// }
