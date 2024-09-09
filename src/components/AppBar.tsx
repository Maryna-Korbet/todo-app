import { AppBar as MUIAppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';
import { useTasks } from '../hooks/useTasks';
import Info from './Info';


const StyledAppBar = styled(MUIAppBar)`
    margin-bottom: 20px;
  `;

const AppBar: React.FC = () => {
  const { tasksQuery } = useTasks();
    
  const tasks = tasksQuery.data?.data || [];
  
  return (
    <StyledAppBar position="static" sx={{ backgroundColor: 'transparent', color: '#ac8150', borderBottom: '1px solid #ac8150' }}>
      <Typography
        variant="h1"
        sx={{ 
          fontFamily: '"Caveat", cursive', 
          fontOpticalSizing: 'auto',
          fontWeight: 700, 
          fontStyle: 'normal',
          fontSize: '100px',
          color: '#ac8150'
        }}
      >
        ToDo list
      </Typography>
      <Toolbar>
        <Info>Active: {tasks.filter((task: { completed: boolean }) => !task.completed).length}</Info>
        <Info>Completed: {tasks.filter((task: { completed: boolean }) => task.completed).length}</Info>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;