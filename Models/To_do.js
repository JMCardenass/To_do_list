import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema
const ToDoSchema = new Schema ({
  task: {
    type: String,
    require: true,
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status",
    require: true
  }
})
export default model('ToDo', ToDoSchema)