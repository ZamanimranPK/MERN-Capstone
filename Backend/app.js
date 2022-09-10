const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const e = require('express')

const app = express()
const port = process.env.port || 5000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//MySQL

const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database: 'iotweb',
})

app.get('/',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM devices', (err,rows)=>{
            connection.release()

            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })
    })
})


app.get('/:id',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM devices WHERE deviceID = ?',[req.params.id], (err,rows)=>{
            connection.release()

            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })
    })
})

app.delete('/:id',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE FROM devices WHERE deviceID = ?',[req.params.id], (err,rows)=>{
            connection.release()

            if(!err){
                res.send(`Record with id ${[req.params.id]} deleted`)
            }else{
                console.log(err)
            }
        })
    })
})

app.post('/',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO devices SET ?',params, (err,rows)=>{
            connection.release()

            if(!err){
                res.send(`Record with id ${params.id} added`)
            }else{
                console.log(err)
            }
        })
    })
})

app.put('/',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const {DeviceID,MAC,IP,Wifi_Strength,SequenceID} = req.body

        connection.query('UPDATE devices SET MAC = ?, IP = ?, Wifi_Strength = ?, SequenceID=? WHERE DeviceID = ?',[MAC,IP,Wifi_Strength,SequenceID,DeviceID], (err,rows)=>{
            connection.release()

            if(!err){
                res.send(`Record with id ${DeviceID} added`)
            }else{
                console.log(err)
            }
        })
    })
})

app.listen(port,()=>{console.log(`listening on port ${port}`)})