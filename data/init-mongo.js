db.createUser({
    user: "admin",
    pwd: "adminPassword",
    roles: [
        {
            role: "readWrite",
            db: "petFeederDB"
        }
    ]
});

db = db.getSiblingDB('petFeederDB');  // switch to petFeederDB