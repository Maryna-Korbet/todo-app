import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';
import { useTasks } from '../hooks/useTasks';
import TaskList from './TaskList';
import Button from './Button';


const StyledButtonList = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const TaskContainer = styled.div<{ $maxHeight: string }>`
  max-height: ${(props) => props.$maxHeight || 'auto'};
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 10px; 
  }

  ::-webkit-scrollbar-track {
    background-color: #000000; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ac8150; 
    border-radius: 10px; 
  }

  scrollbar-width: thin; 
  scrollbar-color: #ac8150 #383838; 
`;

const calculateMaxHeight = () => {
  const footerHeight = 600; 
  return `calc(100vh - ${footerHeight}px)`;
};

const StatusFilter: React.FC = () => {
  const [status, setStatus] = useState<'all' | 'active' | 'completed'>('all');
  const { tasksQuery } = useTasks();

  const [maxHeight, setMaxHeight] = useState(calculateMaxHeight());

  useEffect(() => {
    const handleResize = () => {
      setMaxHeight(calculateMaxHeight());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (tasksQuery.isLoading) return <LinearProgress color="inherit" />;
  if (tasksQuery.isError) {
    const errorMessage = tasksQuery.error instanceof Error ? tasksQuery.error.message : 'Unknown error';
    return <div>Error: {errorMessage}</div>;
  }

  const tasks = tasksQuery.data?.data || [];

  const filteredTasks = tasks.filter((task: { completed: boolean }) =>
    status === 'all'
      ? true
      : status === 'active'
      ? !task.completed
      : task.completed
  );

  return (
    <div>
      <StyledButtonList>
        <Button onClick={() => setStatus('all')}>All</Button>
        <Button onClick={() => setStatus('active')}>Active</Button>
        <Button onClick={() => setStatus('completed')}>Completed</Button>
      </StyledButtonList>
      <TaskContainer $maxHeight={maxHeight}>
        <TaskList tasks={filteredTasks} />
      </TaskContainer>
    </div>
  );
};

export default StatusFilter;