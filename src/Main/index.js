import Header from '../components/Header';
import Tasks from '../components/Tasks';

import { Container } from './styles';

import { tasks } from '../mocks/tasks';
import AddTaskButton from '../components/AddTaskButton';

export default function Main() {
  function handleEditTask(task) {
    alert('Alterar Tarefa');
  }

  function handleChangeStatusTask(task) {
    alert('Alterar Status Tarefa');
  }

  function handleConfirmDeleteTask(task) {
    alert('Confirmar exclusão de Tarefa');
  }

  return (
    <Container>
      <Header />

      <Tasks
        tasks={tasks}
        onEditTask={handleEditTask}
        onChangeStatusTask={handleChangeStatusTask}
        onConfirmDeleteTask={handleConfirmDeleteTask}
      />

      <AddTaskButton onPress={() => alert('Add Tarefa')} />
    </Container>
  );
}