import AllTasksView from "../views/AllTasksView";


function AllTasksContainer() {
 
    let tasks = [{id: 12345, title: "Giving Lecture"}, {id: 23451, title: "Making Exams"}, {id:34512, title: "Making Powerpoint",}] ;
    return (
    <AllTasksView tasks={tasks} />
    );
    }
    
export default AllTasksContainer;