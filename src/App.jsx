import {useState} from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Descriptions from './components/Descriptions';
import Description from './components/Description';
import Results from './components/Results';
import Form from './components/Form';
import Top from './components/Top';
import Statistics from './components/Statistics';
import Stat from './components/Stat';
import Infos from './components/Infos';
import Info from './components/Info';

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return (
      savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
  };
  const [theme, setTheme] = useState(getInitialTheme);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <Main>
        <Form />

        <Results>
          <Descriptions>
            <Top />
            <Description
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
      eros."
            />
          </Descriptions>

          <Statistics>
            <Stat head="Repos" body="8" />
            <Stat head="Followers" body="3938" />
            <Stat head="Following" body="9" />
          </Statistics>

          <Infos>
            <Info logo="location" info="San Francisco, CA" />
            <Info logo="company" info="GitHub" />
            <Info logo="twitter" info="Not Available" />
            <Info logo="organisation" info="https://github.com/blog" />
          </Infos>
        </Results>
      </Main>
    </>
  );
}

export default App;
