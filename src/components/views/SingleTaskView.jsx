import {Link} from 'react-router-dom'

function SingleTaskView({task}) {
    if (!task) {
        return (
          <section>
            <h2>Task not found!</h2>
          </section>
        );
      }

      let priorities = ["Low", "Medium", "High"];
    
      return (
        <section>
          <article>
            <Link to='/tasks'>Back to all tasks</Link>
            <h2>{task.content}</h2>
            <p>Priority: {priorities[task.priority-1]}</p>
            <hr />
            <h3>
              <Link to={`/tasks/${task.id}/edit`}>Edit Task Information</Link>
            </h3>
          </article>
        </section>
      );
}

export default SingleTaskView;