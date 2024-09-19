import { useParams } from "react-router";

const Fullpost = ({ dataList }) => {
  let id = useParams().id;
  let arr = dataList.filter((ele) => ele.id == id);

  return (
    <div>
      <h1 className="head">{arr[0].title}</h1>
      <p>{arr[0].body}</p>
    </div>
  );
};
export default Fullpost;
