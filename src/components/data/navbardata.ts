const NavbarData = [
  {
    title: 'Home',
    link: '/',
    scrollId: 'home',
  },
  {
    title: 'About Us',
    link: '/#aboutus',
    scrollId: 'aboutus',
    children: [
      {
        title: 'Vision & Mission',
        link: '/#vision&mision',
        scrollId: 'vision&mision',
      },
      {
        title: 'Commitment',
        link: '/#commitment',
        scrollId: 'commitment',
      },
      {
        title: 'Value',
        link: '/#value',
        scrollId: 'value',
      },
    ],
  },
  {
    title: 'Client',
    link: '/clients',
  },
  {
    title: 'Product',
    link: '/#product',
    scrollId: 'product',
  },
  {
    title: 'Tracking',
    link: '/tracking',
  },
  {
    title: 'Contact Us',
    link: '/contact-us',
  },
];

export default NavbarData;
