import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile:{
            type:String, // cloudinery
            required:true,
        },
        
        thumbNail:{
            type:String,
            required:true,
        },
        
        title:{
            type:String,
            required:true,
        },
        
        descritption:{
            type:String,
            required:true,
        },
        
        duration:{
            type:Number, // cloudinery
            required:true,
        },
        
        views:{
            type:Number, // cloudinery
            default:0,
        },
        isPublished:{
            type:Boolean,
            default:true,
        },
        
        owner:{
            type:mongoose.Schema.Type.ObjectId,
            ref:User,
         
        },
    },
    {timestamp:true}
    );



    videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)