// ------------------------------------- preparation to run the server ------------------------------------- //
// Declare main app variable
const express = require('express')
const app = express()
// connect to databasae
const postgres = require('./postgres-connection.js')
postgres.connect();
// extract body of incoming request from API 
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// declare static variable directory
app.use('/scripts', express.static('scripts'))
app.use('/styles', express.static('styles'))

// start server
app.listen(3000, function() {
    console.log('listening on 3000')
})
// open landing page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
 
// -------------------------------------------- CRUD API event -------------------------------------------- //
app.get('/task_list', (req, res)=>{
    postgres.query(`Select * from task_list`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    postgres.end;
})

app.get('/task_list/:id', (req, res)=>{
    postgres.query(`Select * from task_list where id='${req.params.id}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    postgres.end;
})

app.post('/task_list', (req, res)=> {
    const task = req.body;
    const insertQuery = `insert into task_list values(
                            '${task.id}', ${task.stopwatch_time_hh}, ${task.stopwatch_time_mm},
                             ${task.stopwatch_time_ss}, '${task.title}', ${task.is_task_not_completed}, 
                             ${task.is_time_paused}, '${task.deadline}', ${task.timer_on}, ${task.is_end}, 
                             ${task.time_end_hh}, ${task.time_end_mm}, ${task.time_end_ss}, ${task.time_cycle}, '${task.text_id}')`

    postgres.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    postgres.end;
})

app.put('/task_list/:id', (req, res)=> {
    const task = req.body;
    const updateQuery = `update task_list
                       set 
                       id = '${task.id}',
                       stopwatch_time_hh = ${task.stopwatch_time_hh},
                       stopwatch_time_mm = ${task.stopwatch_time_mm},
                       stopwatch_time_ss = ${task.stopwatch_time_ss},
                       title = '${task.title}',
                       is_task_not_completed = ${task.is_task_not_completed},
                       is_time_paused = ${task.is_time_paused},
                       deadline = '${task.deadline}',
                       timer_on = ${task.timer_on},
                       is_end = ${task.is_end},
                       time_end_hh = ${task.time_end_hh},
                       time_end_mm = ${task.time_end_mm},
                       time_end_ss = ${task.time_end_ss},
                       time_cycle = ${task.time_cycle}, 
                       text_id = '${task.text_id}'
                       where id = '${task.text_id}'`

    postgres.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    postgres.end;
})

app.delete('/task_list/:id', (req, res)=> {
    const insertQuery = `delete from task_list where id='${req.params.id}'`

    postgres.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    postgres.end;
})



// -------------------------------------------- tester CRUD API event -------------------------------------------- //
app.get('/tester', (req, res)=>{
    postgres.query(`Select * from tester`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    postgres.end;
})

app.post('/tester', (req, res)=> {
    const val = req.body;
    postgres.query(`insert into tester values('${val.a}','${val.b}')`, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    postgres.end;
})