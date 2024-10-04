import { Text } from '../Text';

import { Task, TaskHeader, TaskDescription, TaskFooter } from './styles';

export default function Tasks() {
  return (
    <Task>
      <TaskHeader>
        <Text size={18} weight="600">Estudar React Native</Text>
      </TaskHeader>
      <TaskDescription>
        <Text opacity={0.5}>Estudar para o simulado</Text>
      </TaskDescription>
      <TaskFooter></TaskFooter>
    </Task>
  );
}