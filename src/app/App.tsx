
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classnames/classnames';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { MainPage } from '../pages/MainPage';
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;