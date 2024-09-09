import { Checkbox, IconButton } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useTasks } from '../hooks/useTasks';


const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ac8150;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    color: #ac8150;
    transition: transform 0.3s ease; 
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledDiv = styled.div`
  margin: 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 60px);
  color: #ac8150;
  text-transform: none;
  font-family: "Caveat", cursive;
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  text-align: left;
`;

const Task: React.FC<{ task: { id: string; text: string; completed: boolean } }> = ({ task }) => {
  const { updateTaskMutation, deleteTaskMutation } = useTasks();

  return (
    <TaskWrapper>
      <Checkbox
        checked={task.completed}
        onChange={() =>
          updateTaskMutation.mutate({
            id: task.id,
            text: task.text,
            completed: !task.completed,
          })
        }
        sx={{
          color: '#ac8150',

          '&.Mui-checked': {
            color: '#ac8150',
          },

        }}
      />
      <StyledDiv>{task.text}</StyledDiv>
      <StyledIconButton onClick={() => deleteTaskMutation.mutate(task.id)}>
        <CloseIcon />
      </StyledIconButton>
    </TaskWrapper>
  );
};

export default Task;
