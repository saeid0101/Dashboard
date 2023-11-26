import { singleUser } from "../../data";
import { useParams } from "react-router-dom";
import Single from "../../components/single/Single";
import useUserStore from "../../usersStore";

function User() {
  const { rows } = useUserStore();
  const params = useParams();
  const user = rows.find((user) => user.id === parseInt(params.id));
  return <Single item={user} chartData={singleUser} />;
}

export default User;
