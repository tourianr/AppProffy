module.exports = async function(db, {proffy, classesValue, classSchedules}) {
    //Inserir dados na tabela proffys
   const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffy.name}",
            "${proffy.avatar}",
            "${proffy.whatsapp}",
            "${proffy.bio}"
        );
   `)

   const proffy_id = insertedProffy.lastID

   //Inserir dados na tabela classesValue
   const insertedClasses = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classesValue.subject}",
                "${classesValue.cost}",
                "${proffy_id}"
            );
   `)

   const class_id = insertedClasses.lastID

   //Inserir dados na tablea class_schedule
   const insertedAllClassScheduleValues = classSchedules.map((value) => {
       return db.run(`
       INSERT INTO class_schedule (
        class_id,
        weekday,
        time_from,
        time_to
       ) VALUES (
        "${class_id}",
        "${value.weekday}",
        "${value.time_from}",
        "${value.time_to}"
       );
       `)
   })


   await Promise.all(insertedAllClassScheduleValues)
}