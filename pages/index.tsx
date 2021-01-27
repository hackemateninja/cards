// Packages
import { ThemeProvider } from 'styled-components';

// Layout
import DefaultLayout from '@/layout/default';

// Styles
import GlobalStyles from '@/theme/global';
import PrimaryTheme from '@/theme/primary';

//Components

export default function Home() {
  return (
    <ThemeProvider theme={PrimaryTheme}>
			<GlobalStyles />
      <DefaultLayout>
        <h1>UsedCars</h1>
			</DefaultLayout>
		</ThemeProvider>
  )
}
