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
  const [isNewTaskModalVisible, setisNewTaskModalVisible] = useState(false);

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

  return (
    <Container>
      <Header />

      <Tasks
        tasks={tasks}
        onEditTask={handleEditTask}
        onChangeStatusTask={handleChangeStatusTask}
        onConfirmDeleteTask={handleConfirmDeleteTask}
      />

      <AddTaskButton onPress={() => setisNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setisNewTaskModalVisible(false)}
      />
    </Container>
  );
}