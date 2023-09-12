import { Provider } from '@react-spectrum/provider';
import { theme as defaultTheme } from '@react-spectrum/theme-default';
import { Footer, Header, View} from '@react-spectrum/view';
import { Flex } from '@react-spectrum/layout';
import TodoList from './feature/components/TodoList';
import Nav from './feature/elements/Nav';
import Foot from './feature/elements/Foot';
import { useDarkMode } from './hooks/useDarkMode';
import Route from './feature/components/Route';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if (!componentMounted) {
    return <div />
  };

  return (
    <Provider theme={defaultTheme} colorScheme={theme}>
        <Flex direction="column">
          <Header>
            <Nav isDark={theme === 'light' ? false : true} handleDark={toggleTheme} />
          </Header>
          <main className="container">
            <Flex direction="column" gap="size-100">
              <Route path="/">
                <TodoList />
              </Route>
              <Route path="/about">
                <h1>hello i'm about</h1>
              </Route>
            </Flex>
          </main>
          <View paddingY="size-250">
            <Footer><Foot /></Footer>
          </View>
        </Flex>
    </Provider>
  );
}

export default App;
