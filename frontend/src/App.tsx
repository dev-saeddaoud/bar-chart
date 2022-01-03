import styled from 'styled-components/macro';
import AddNewBarForm from './components/add-new-bar-form/AddNewBarForm';
import ArrangeButton from './components/arrange-button/ArrangeButton';
import BarChart from './components/BarChart';

const Canvas = styled.div`
  background-color: var(--box-color);
  padding: 20px;
  display: flex;
`;

function App() {
  // const [data, setData] = useState(InitialData);

  return (
    <Canvas>
      <AddNewBarForm />
      <BarChart />
      <ArrangeButton />
    </Canvas>
  );
}

export default App;
