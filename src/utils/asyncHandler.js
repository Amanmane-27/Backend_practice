/* here requestHandler is function which is a parameter to */
const asyncHandler=(requestHandler) => {
 return  (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
  }
}


export {asyncHandler}



//try catch approch

// const asyncHnadler= (fn)=> async(req,res,next) =>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }