import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactstrapAlert from './ReactstrapAlert';
import ReactstrapBadge from './ReactstrapBadge';
import ReactstrapDrop from './ReactstrapDrop';
import ReactstrapBtnGrp from './ReactstrapBtnGrp';
import ReactstrapCard from './ReactstrapCard';
import ReactstrapCarousel from './ReactstrapCarousel';

function App() {
  return (
    <div>
      <h1>Reactstrap Test</h1>
      <ReactstrapAlert />
      <ReactstrapBadge />
      <ReactstrapDrop />
      <ReactstrapBtnGrp />
      <ReactstrapCard />
      <ReactstrapCarousel />
    </div>
  );
}

export default App;