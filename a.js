const fs = require("fs");
const login = require("fca-unofficial");

// Simple echo bot. It will repeat everything that you say.
// Will stop when you say '/stop'
login({cookie: fs.readFileSync('cookie.txt', 'utf8')}, (err, api) => {
    if(err) return console.error(err);

    api.setOptions({listenEvents: true});

    var stopListening = api.listenMqtt((err, event) => {
        if(err) return console.error(err);

        api.markAsRead(event.threadID, (err) => {
            if(err) console.error(err);
        });

        switch(event.type) {
            case "message":
                if(event.body === '/stop') {
                    api.sendMessage("Goodbye…", event.threadID);
                    return stopListening();
                }
                api.sendMessage("TEST BOT: " + event.body, event.threadID);
                break;
            case "event":
                console.log(event);
                break;
        }
    });
});