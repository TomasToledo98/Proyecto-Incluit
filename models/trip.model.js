const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// Bien el modelo, solamente revisaria un poco la indentacion para que se vea mas prolijo ;)
const tripSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  destination: { type: String, required: true },
  category: { type: String, enum: ['familiar','diversión','trabajo'] },
  start_date: { type: Date, required: true },
  end_date: { type: Date }
}, {
  timestamps: true
});

module.exports = mongoose.model('trip', tripSchema);