export default class TaskRepository {

    async getAllTasksService() {
        let data = [];

        try {
            data = JSON.parse(localStorage.getItem("taskertasks"));
            return data ? data : [];
        } catch (e) {
            throw e;
        }
    }
    async addNewTaskService(task) {
        const newTask = { 
            
            ...task, id: Math.floor(Math.random() * 1000)};
        // localStorage.removeItem("taskertasks")

        try {
           let allTasks =JSON.parse( localStorage.getItem("taskertasks"));

           if(allTasks === null) {
            localStorage.setItem("taskertasks", JSON.stringify([]))
            allTasks =JSON.parse( localStorage.getItem("taskertasks"));
           }
            localStorage.setItem("taskertasks", JSON.stringify([...allTasks,newTask]))
            return newTask;
        //    return  JSON.parse(localStorage.getItem("taskertasks"));
           
           
        } catch(e) {
            throw e;
        }
    } 
    async editATaskService(task) {
        try {
            const allTasks = JSON.parse(localStorage.getItem("taskertasks"));
            const filteredTasks = allTasks.filter(t => t.id !== task.id);
            
            localStorage.setItem("taskertasks", JSON.stringify([...filteredTasks, task]));

            
        }    catch (e) {
            throw e;
        }
    }

    async moveATaskService(task) {}
    async deleteATaskService(taskId) {
        try {
            let allTasks =JSON.parse( localStorage.getItem("taskertasks"));
            const filteredTasks = allTasks.filter(task =>   task.id !== taskId);

            localStorage.setItem("taskertasks", JSON.stringify([...filteredTasks]))

            return JSON.parse( localStorage.getItem("taskertasks"));
        } catch (e) {
            throw e;
        }
    }
    async deleteAllTasksService() {
        try {
            localStorage.removeItem("taskertasks");
            return "All Tasks Cleared";
        } catch (e) {
            throw e;
        }
    }
}