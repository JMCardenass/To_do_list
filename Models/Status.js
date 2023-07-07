import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema
const Status_interface = new Schema ({
  status: {
    type: String,
    require: true,
    maxLength: 30
  }
})
export default model('Status', Status_interface)