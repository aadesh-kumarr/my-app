import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.mongodb_url)
mongoose.Promise=global.Promise

// Define the schema
const BlogsSchema = new Schema({
    title:{type:String,required:true},
    link:{type:String,required:true},
    category:{type:String,required:true},
    date:{type:Date,required:true},
    content:{type:String,required:true},
});

// Ensure the model is not redefined
const Blogs = mongoose.models.BlogsSchema || mongoose.model('BlogsSchema', BlogsSchema);

export default Blogs