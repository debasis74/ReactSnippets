import "./App.css";
import { ThemeProvider, useTheme } from "./Components/ThemeContext";
import Accordion from "./Components/Accordion/Accordion";
import WeatherApp from "./Components/Weather";
import Pagination from "./Components/Pagination";
import RoutesComponent from './Components/RoutesComponent/index';
import FileExplorer from "./Components/FileExplorer/FileExplorer";
import Todo from "./Components/Todo/Todo";
import ImageCarousel from "./Components/ImageCarousel";
import InfiniteScroll from "./Components/Infinite Scrolling";

// const ThemedAppContent = () => {
//   const { isDarkTheme } = useTheme();
//   debugger
//   return (
//     <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
//       <RoutesComponent />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
        <InfiniteScroll/>
    </div>
  );
}

export default App;
