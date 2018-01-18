let messages = [];
let id = 0;

module.exports={
    create: (req, res)=>{
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(" created message ")
    },
    read: (req, res)=>{
        res.status(200).send(messages);
    },
    update:(req, res)=>{
        let idToUpdate = req.params.id*1;
        let index = messages.findIndex((message)=>(message.id == idToUpdate))
        messages[index] = {
            id: idToUpdate,
            text: req.body.text,
            time: req.body.time
        }
        res.status(200).send("updated message")
    },
    delete:(req, res)=>{
        let idToDelete = req.params.id*1;
        let index = messages.findIndex((message)=>(messages.id == idToDelete))
        messages.splice(idToDelete, 1)
        res.status(200).send('deleted message')
    }
}