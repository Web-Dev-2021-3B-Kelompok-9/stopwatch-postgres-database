# Stopwatch-postgresql

### Deskripsi
Kelompok 9
Mini Project ini mengenai pengembangan aplikasi stopwatch yang telah dibuat. Stopwatch dikembangkan dengan menambahkan library Sequelize dan Axios. pada aplikasi Stopwatc yang telah dibuat

### Prerequisites

Berikut software yang dibutuhkan untuk menjalankan program
- PostgreSQL (https://www.postgresql.jp/download)
- Node.js  (https://nodejs.org/ja/download/)

### Database preparation

Membuat database task-monitoring:
- buka pgAdmin
- dalam database , buat database dengan nama "task-monitoring"
- dalam "task-monitoring", masuk ke scema -> public -> table
- dalam table, buat table dengan properties sbb : 
    (nama kolom) : (tipe data)
    - id: text
    - stopwatch_time_hh: integer
    - stopwatch_time_mm: integer
    - stopwatch_time_ss: integer
    - title: text
    - is_task_not_completed: boolean
    - is_time_paused: boolean
    - deadline: text
    - timer_on: boolean
    - is_end: boolean
    - time_end_hh: integer
    - time_end_mm: integer
    - time_end_ss: integer
    - time_cycle: integer
    - text_id: text
- referensi pembuatan data base postgres sql : https://www.youtube.com/watch?v=uoJjDbL-Y_E

### Installation

1. Clone repository
   ```sh
   $ git clone Web-Dev-2021-3B-Kelompok-9/stopwatch-postgres-database
   ```
2. Extract zip
3. Extract zip
   ```sh
   $ cd task-monitoring(database-postgresql)
   ```
5. install npm  
   ```sh
   $ npm install
   ```
6. run server
   ```sh
   $ npm run dev
   ```
7. buka web di 
   http://localhost:3000/

