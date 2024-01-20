import mongoose from "mongoose"

const routineSchema = new mongoose.Schema({
  profile: String,
  week: Array,
  treatments: Array,
})
routineSchema.set("toJSON", {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model("Routine", routineSchema)

