import mongoose from "mongoose"

const skinProfileSchema = new mongoose.Schema({
  type: String,
  concerns: Array,
  prevRoutine: Array,
  budget: String,
  complexity: String,
})
skinProfileSchema.set("toJSON", {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model("SkinProfile", skinProfileSchema)

