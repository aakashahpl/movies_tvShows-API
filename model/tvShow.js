import mongoose from "mongoose";

const showSchema = mongoose.Schema({
    show_id:{
      type:String,
      minLength:1,
      require:true
    },
    title:{
        type:String,
        require:true,
        minLength:1,

    },
    directors: {
        type: [Number],
        require: true,
        minLength: 2,
      },
    producers: {
        type: [Number],
        require: true,
        minLength: 2,
      },
    languages:{
        type: String,
        require: true,
        minLength: 2,
      },
    release_date:{
        type: String,
        require: true,
        minLength: 2,
      },
    generes:{
        type: [String],
        require: true,
        minLength: 2,
      }
});

const showModel = mongoose.model("show",showSchema);
export default showModel;