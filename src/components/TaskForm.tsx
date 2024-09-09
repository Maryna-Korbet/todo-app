import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useTasks } from '../hooks/useTasks';
import Button from './Button';


const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Field)`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ac8150;
  border-radius: 4px;
  font-size: 16px;
  color: #ac8150;
  font-family: "Caveat", cursive;
  font-size: 28px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #383838;
  opacity: 0.8;
  
  &:focus {
    border-color: #ac8150;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;

const ErrorMessage = styled.div`
  font-family: "Caveat", cursive;
  color: #ac8150;
  margin-bottom: 10px;
`;

const TaskForm: React.FC = () => {
  const { createTaskMutation } = useTasks();

  const handleSubmit = (values: { text: string }, { resetForm }: { resetForm: () => void }) => {
    if (!values.text.trim()) {
      return;
    }
    
    createTaskMutation.mutate({ text: values.text, completed: false });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ text: '' }}
      validationSchema={Yup.object({
        text: Yup.string().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledInput name="text" placeholder="Enter task..." />
          {touched.text && errors.text && <ErrorMessage>{errors.text}</ErrorMessage>}
          <Button type="submit">Add Task</Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default TaskForm;

