
import {FETCH_ALL,DELETE,UPDATE,CREATE} from '../constants/actionTypes'
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts=[],action)=>{
    switch (action.type){
        case FETCH_ALL:
            return action.payload; 
        case CREATE:
            return [...posts,action.payload]
            //return posts.map((post)=>(post._id === action.payload._id? action.payload:post))
        // eslint-disable-next-line no-fallthrough
        case UPDATE:
            return posts.map((post)=>(post._id === action.payload._id? action.payload:post))
        case DELETE:
            return posts.filter((post)=> post._id !== action.payload)
        default:  
            return posts;
    }
}