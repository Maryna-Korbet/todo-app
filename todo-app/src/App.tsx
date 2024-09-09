import { CssBaseline } from '@mui/material';
import styled from 'styled-components';
import Layout  from './components/Layout';
import AppBar  from './components/AppBar';
import TaskForm  from './components/TaskForm';
import StatusFilter from './components/StatusFilter';
import './App.css';

const AppWrapper = styled.div`
  height: 95vh;
  background-color: #000000;
  opacity: 0.9;
  border-radius: 8px;
`;


function App() {

  return (
    <AppWrapper>
      <CssBaseline />
        <Layout>
        <AppBar />
        <TaskForm />
        <StatusFilter />
      </Layout>
    </AppWrapper>
  )
};

export default App;
