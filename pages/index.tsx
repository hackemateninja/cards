// Packages
import { ThemeProvider } from 'styled-components';

// Layout
import DefaultLayout from '@layout/default';

// Styles
import GlobalStyles from '@theme/global';
import PrimaryTheme from '@theme/primary';

//Components
import List from '@comp/list';

const TopCities = [
  { url: '/', title: 'Austin, TX' },
  { url: '/', title: 'Baltimore, MD' },
  { url: '/', title: 'Brimfield, MA' },
	{ url: '/', title: 'Charlotte, NC' },
	{ url: '/', title: 'Colorado Springs, CO' },
	{ url: '/', title: 'Columbus, OH' },
	{ url: '/', title: 'Dallas, TX' },
	{ url: '/', title: 'Denver, CO' },
	{ url: '/', title: 'Detroit, MI' },
	{ url: '/', title: 'Fort Worth, TX' },
	{ url: '/', title: 'Houston, TX' },
	{ url: '/', title: 'Indianapolis, IN' },
	{ url: '/', title: 'Jacksonville, FL' },
	{ url: '/', title: 'Louisville, KY' },
	{ url: '/', title: 'Miami, FL' },
	{ url: '/', title: 'Milwaukee, WI' },
	{ url: '/', title: 'Phoenix, AZ' },
	{ url: '/', title: 'Pittsburgh, PA' },
	{ url: '/', title: 'San Antonio, TX' },
	{ url: '/', title: 'San Jose, CA' },
	{ url: '/', title: 'Tucson, AZ' },
];

export default function Home() {
  return (
    <ThemeProvider theme={PrimaryTheme}>
			<GlobalStyles />
      <DefaultLayout>
        <h1>UsedCars</h1>
        <List items={TopCities} type="cities" columns={4} />
			</DefaultLayout>
		</ThemeProvider>
  )
}
