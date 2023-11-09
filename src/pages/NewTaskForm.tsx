import { Task } from './Task';
import { IonInput, IonRow, IonGrid, IonButton } from '@ionic/react';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

const NewTaskForm: FunctionComponent<Props> = ({ onChange, onAdd}) => (
  <form onSubmit={onAdd}>
    <IonGrid>
      <IonRow>
        <IonInput placeholder="Enter new to-do here:" onChange={onChange} />
      </IonRow> <br/>
      <IonRow>
        <IonButton fill="outline" type="submit">Confirm</IonButton>
      </IonRow>
    </IonGrid>
  </form>
);

export default NewTaskForm