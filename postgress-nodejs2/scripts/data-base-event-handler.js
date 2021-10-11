
const get_task_list = async () =>{
    // get all task list 
    // return promise array of task list (use async~await function to get the data)
    const url = '/task_list';
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error.message);
    }
}

const get_task_by_id = async (id) =>{
    // get specified task list, use id as argument 
    // return object of task
    let     url =`/task_list/${id}`;
    try {
        let res = await fetch(url);
        return (await res.json())[0];
    } catch (error) {
        console.log(error.message);
    }
}

const add_task = (temp_post_task) =>{
    // post task, need all off the element from task 
    // add new task to the database

    try {
        let result = fetch('/task_list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(temp_post_task)
        })
        result.then((sucess) => { console.log(sucess) })
    } catch (error) {
        console.log(error)
    }
}

const update_task = (temp_post_task) =>{
    // update task, need all off the element from task 
    // change value of task element in the database to the new one
    try {
        let result = fetch(`/task_list/${temp_post_task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(temp_post_task)
        })
        result.then((sucess) => { console.log(sucess) })
    } catch (error) {
        console.log(error)
    }
}

const delete_task = (id) => {
    // delete task, need id
    // change value of task element in the database to the new one
    try {
        let result = fetch(`/task_list/${id}`, {
        method: 'DELETE'
        })
        result.then((sucess) => { console.log(sucess) })
    } catch (error) {
        console.log(error)
    }
}

const add_task2 = (
    temp_id , temp_stopwatch_time_hh , temp_stopwatch_time_mm , temp_stopwatch_time_ss  , 
    temp_tittle , temp_is_task_not_completed , temp_is_time_paused , temp_deadline ,
    temp_timer_on , temp_is_end , temp_time_end_hh , temp_time_end_mm , temp_time_end_ss ,
    temp_time_cycle , temp_text_id
) =>{
// post task, need all off the element from task 
// add new task to the database
const temp_post_task = {
id: temp_id,
stopwatch_time_hh: temp_stopwatch_time_hh,
stopwatch_time_mm: temp_stopwatch_time_mm,
stopwatch_time_ss: temp_stopwatch_time_ss,
tittle: temp_tittle,
is_task_not_completed: temp_is_task_not_completed,
is_time_paused: temp_is_time_paused,
deadline: temp_deadline,
timer_on: temp_timer_on, 
is_end: temp_is_end, 
time_end_hh: temp_time_end_hh, 
time_end_mm: temp_time_end_mm, 
time_end_ss: temp_time_end_ss, 
time_cycle: temp_time_cycle, 
text_id: temp_text_id
};    
try {
let result = fetch('/task_list', {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
},
body: JSON.stringify(temp_post_task)
})
result.then((sucess) => { console.log(sucess) })
} catch (error) {
console.log(error)
}
}
export { get_task_list , get_task_by_id , add_task , update_task , delete_task }