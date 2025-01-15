import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classnames/classnames';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app',
      { hovered: true, selected: true },
      [theme, 'cls2', 'cls3']
    )}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Main Page</Link>
      <Link to="/about">About Page</Link>
      <AppRouter />
    </div>
  )
}

export default App;