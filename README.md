# stopwatch-postgresql

### Prerequisites

Berikut software yang dibutuhkan untuk menjalankan program
- PostgreSQL (https://www.postgresql.jp/download)
- Node.js  (https://nodejs.org/ja/download/)

### Database preparation

Membuat database task-monitoring:
- bukaa pdAdmin
- dalam data base , buat database dengan nama "task-monitoring"
- dalam "task-monitoring", masuk ke scema -> public -> table
- dalam table, buat table dengan properties sbb : 
    (nama kolom) : (tipe data)
    1.  id: text
    2.  stopwatch_time_hh: integer
    3.  stopwatch_time_mm: integer
    4.  stopwatch_time_ss: integer
    5.  title: text
    6.  is_task_not_completed: boolean
    7.  is_time_paused: boolean
    8.  deadline: text
    9.  timer_on: boolean
    10. is_end: boolean
    11. time_end_hh: integer
    12. time_end_mm: integer
    13. time_end_ss: integer
    14. time_cycle: integer
    15. text_id: text
### Installation

1. Clone repository
   ```sh
   $ git clone Web-Dev-2021-3B-Kelompok-9/stopwatch-postgres-database
   ```
2. Extract zip
3. install npm  
   ```sh
   $ npm install
   ```
4. run server
   ```sh
   $ npm run dev
   ```
5. open web
   http://localhost:3000/

