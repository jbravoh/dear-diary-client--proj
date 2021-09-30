export default function NewPost(): JSX.Element {
    return (
        <>
            <form>
                <label>Title</label>
                <input type="text" name="title" placeholder="Enter title"/>
                <label>Post</label>
                <textarea  name="title" placeholder="Let it all out"/>
            </form>
        </>
    )
  }