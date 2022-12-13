import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

export default function Post() {

    const { id, postId } = useParams();

    const { data: post, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles/" + id + "/post/" + postId);

    console.log(post)

    return ( 
        <div className={styles.ensembleDefault}>
            <h1>Post</h1>
        </div>
    );
}