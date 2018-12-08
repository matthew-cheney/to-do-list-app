var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    todolist: {type: Array},
    color: {type: String, default: "a3d9ff"},
    hashed_password: String
});
mongoose.model('User', UserSchema);
