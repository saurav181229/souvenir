const PostMessage = require('../models/postMessage'); 
const mongoose = require('mongoose');
async function getPosts(req,res){
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
 res.status(404).json({message:error.message});
        
    }

}

 async function createPost(req,res){
    const post  = req.body;
    const newPost = new PostMessage(post)
    try {
       await newPost.save();
       res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
}

async function updatePost(req,res){
    const {id} = req.params;
    const post = req.body;


    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that id');


    

    const updatedPost = await PostMessage.findByIdAndUpdate(id,{...post,id},{new:true})
    res.json(updatedPost)
}


async function deletePost(req,res){
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that id');

    await PostMessage.findByIdAndDelete(id);
    res.json({message:'post deleted successfully'})
}

async function likePost(req,res){

    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that id');
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
    res.json(updatedPost);
}

module.exports ={getPosts,createPost,updatePost,deletePost,likePost}