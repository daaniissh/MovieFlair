import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";


const ProtectedRouterAfterLogIn = () => {
  const navigate = useNavigate();
  //const { isAuth } = useContext(AuthContext);
  let token = localStorage.getItem('userData')
  console.log(token != null, "tokan.......................");



  return token != null ? navigate(-1) : <Outlet />;
}
export default ProtectedRouterAfterLogIn
