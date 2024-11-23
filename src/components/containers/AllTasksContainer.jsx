// import AllTasksView from "../views/AllTasksView";


// function AllTasksContainer() {
 
//     let tasks = [{id: 12345, title: "Giving Lecture"}, {id: 23451, title: "Making Exams"}, {id:34512, title: "Making Powerpoint",}] ;
//     return (
//     <AllTasksView tasks={tasks} />
//     );
//     }
    
// export default AllTasksContainer;

import AllTasksView from "../views/AllTasksView";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../../store/tasksSlice";

function AllTasksContainer() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const deleteDispatch = (taskId) => dispatch(deleteTask(taskId));

    useEffect(() => {
        dispatch(fetchTasks());
      }, [dispatch]);
    
    return (
       <AllTasksView tasks={tasks} deleteTask={deleteDispatch} />
    );

}

export default AllTasksContainer;