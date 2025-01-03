import axios from "axios";

export async function saveComment(commentData){
    const response= await axios.post("http://localhost:8080/comment",commentData)
    return response.data;
}

export async function getCommentByPostId(postId){
    const response= await axios.get("http://localhost:8080/getComment", { params: { postId } })
    return response.data;
}