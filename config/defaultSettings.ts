import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#13C2C2',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;

//** */
// {
//   "navTheme": "dark",
//   "primaryColor": "#13C2C2",
//   "layout": "side",
//   "contentWidth": "Fluid",
//   "fixedHeader": false,
//   "fixSiderbar": true,
//   "title": "Ant Design Pro",
//   "pwa": false,
//   "iconfontUrl": "",
//   "menu": {
//     "locale": true
//   },
//   "headerHeight": 48
// }