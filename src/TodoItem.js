import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onCompleted}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDeleted}
      />
    </li>
  );
}

export { TodoItem };