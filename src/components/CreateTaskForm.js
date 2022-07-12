import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TaskCard(props) {
    return (
      <li className="task-card mb-2" key={props.taskId} data-id={props.taskId}>
        <div>{props.name}</div>
        <div>{props.duration} min</div>
        <button className="close-btn" onClick={(e) => props.onCrossClick(e)}>
          <FontAwesomeIcon icon="fa-solid fa-circle-xmark"/>
        </button>
      </li>
    );
  }
  
  export default TaskCard;
  