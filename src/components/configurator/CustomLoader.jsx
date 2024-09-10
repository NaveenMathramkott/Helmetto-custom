import { Html } from "@react-three/drei";
import "./customStyles.css";

const CustomLoader = () => {
  return (
    <Html center>
      <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    </Html>
  );
};

export default CustomLoader;
