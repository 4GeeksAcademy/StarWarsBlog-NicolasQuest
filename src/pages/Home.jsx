
import gifImage from "../assets/img/gif.gif";
import NavbarTop from "../components/NavbarTop.jsx";

export const Home = () => {


  return (
    <div className="mt-5">
        <div className="d-flex justify-content-center selected-home">
         <NavbarTop />
        </div>
        <div className=" d-flex justify-content-center mt-5">
          <img className="w-100" style={{height:"850px"}} src={gifImage} alt="" />
        </div>
    </div>
  );
};


/* 
<img
              src="https://i.redd.it/t7wgqi8220ae1.gif"
              alt="SW GIF"
              className="pt-5"
              style={{width:"140vh"}}
            /> 
            */