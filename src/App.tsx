import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classnames/classnames';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
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
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;