import React from 'react';
import styled from 'styled-components';
import Task from './Task';


const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
`;

const EmptyListMessage = styled.div`
  font-family: "Caveat", cursive;
  color: #ac8150;
  margin-bottom: 10px;
  font-size: 28px;
  text-align: center;
`;

const TaskList: React.FC<{ tasks: { id: string; text: string; completed: boolean }[] }> = ({ tasks }) => {
  return (
    <TaskListWrapper>
      {tasks.length === 0 ? (
        <EmptyListMessage>No tasks available</EmptyListMessage>
      ) : (
        tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))
      )}
    </TaskListWrapper>
  );
};

export default TaskList;