import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactstrapAlert from './ReactstrapAlert';
import ReactstrapBadge from './ReactstrapBadge';
import ReactstrapDrop from './ReactstrapDrop';
import ReactstrapBtnGrp from './ReactstrapBtnGrp';
import ReactstrapCard from './ReactstrapCard';
import ReactstrapCarousel from './ReactstrapCarousel';
import ReactstrapCollapse from './ReactstrapCollapse';
import ReactstrapFade from './ReactstrapFade';
import ReactstrapForm from './ReactstrapForm';
import ReactstrapInputGroup from './ReactstrapInputGroup';
import ReactstrapListGroup from './ReactstrapListGroup';
import ReactstrapModal from './ReactstrapModal';

function App() {
  return (
    <>
      <h1>Reactstrap Test</h1>
      <ReactstrapAlert />
      <ReactstrapBadge />
      <ReactstrapDrop />
      <ReactstrapBtnGrp />
      <ReactstrapCard />
      {/* <ReactstrapCarousel /> */}
      <ReactstrapCollapse />
      <ReactstrapFade />
      <ReactstrapForm />
      <ReactstrapInputGroup />
      <ReactstrapListGroup />
      <ReactstrapModal />
    </>
  );
}

export default App;
