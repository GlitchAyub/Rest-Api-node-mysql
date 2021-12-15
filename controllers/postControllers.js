const Post = require('../models/Post')
exports.getAllPost=async(req,res,next)=>{
    try {
        const [post,_] =await Post.findall();
        res.status(200).json({count:post.length,post})
    } catch (error) {
        console.log(error);
        next(error)
        
    }
    

}
exports.createNewPost=(req,res,next)=>{
    try {
        let {title,body}=req.body;
        let post= new Post(title,body)
        post.save()
        res.status(201).json({message:"post created"})
        console.log(post);
        
    } catch (error) {
        console.log(error);
        next(error)
    }
    

}
exports.getPostById=async(req,res,next)=>{
   try {
    let postid=req.params.id;   
    const [post,_] = await Post.findbyid(postid);
    res.status(200).json({post:post[0]})
   } catch (error) {
    console.log(error);
    next(error)
   }

}