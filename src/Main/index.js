import { useState } from 'react';

import Header from '../components/Header';
import Tasks from '../components/Tasks';

import { Container } from './styles';

import { tasks } from '../mocks/tasks';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import NewTaskModal from '../components/NewTaskModal';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);

  function handleEditTask(task) {
    alert('Alterar Tarefa');
  }

  function handleChangeStatusTask(task) {
    alert('Alterar Status Tarefa');
  }

  function handleConfirmDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  function handleDeleteTask() {
    //Código p excluir a tarefa
    setIsDeleteModalVisible(false);
  }

  function handleCreateTask(task) {
    //Código p cadastrar a tarefa
    setIsNewTaskModalVisible(false);
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

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />
    </Container>
  );
}