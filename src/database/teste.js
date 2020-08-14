const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados
    proffy = {
        name: "Wendell Régis",
        avatar: "https://avatars0.githubusercontent.com/u/45856720?s=460&u=63e01e69a29298400ab031f259fc63b9ac39a4e5&v=4",
        whatsapp: "85997017021",
        bio: "Estudante de Análise e Desenvolvimento de Sistemas pela Unifor, amante de jogos, aspirante a Game Dev e contador de piadas ruins nas horas vagas."

    }

    classesValue = {
        subject: 1,
        cost: "20",
    }

    classSchedules = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to:- 1220
        }
    ]

   // await createProffy(db, {proffy, classesValue, classSchedules})

    //Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    //consultar as classes de um determinado professor
    //trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes on (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    
    //Lógica para a resolução da busca dos horários
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
})