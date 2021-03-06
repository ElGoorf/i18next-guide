import Link from 'next/link';

const links = [
  {
    label: 'Intro',
    pageName: '/',
  },
  {
    label: 'Basic',
    pageName: 'basic',
  },
  {
    label: 'Plurals',
    pageName: 'plurals',
  },
  {
    label: 'Interpolation',
    pageName: 'interpolation',
  },
];

const Menu = () => (
  <div>
    <ul>
      {
                links.map((link) => <li key={link.pageName}><Link href={link.pageName}>{link.label}</Link></li>)
            }
    </ul>
  </div>
);

export default Menu;
