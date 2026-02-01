db = db.getSiblingDB("asupg");

db.createUser({
    user: "asupg_user",
    pwd: "asupg_pass",
    roles: [
        {role: "readWrite", db: "asupg"}
    ]
});

