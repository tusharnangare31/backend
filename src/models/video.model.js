import mongoose,{Schema} from "mongoose"

const videoScheme = new Schema({
    videoFile :{
        type:String, // cloudinary url
        required : true
    },
    thumbnail : {
        type : String,
        required : true,
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    views : [
        {
            type : Schema.Types.ObjectId,
            ref : 'User',
            default: 0
        },
        
    ],
    isPublished : {
        type : Boolean,
        default : true
    }
},{timestamps:true})

export const Video = mongoose.model('Video',videoScheme);