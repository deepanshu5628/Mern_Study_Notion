import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import Forgetpasspage from "./pages/Forgetpasspage";
import Updatepassword from "./pages/Updatepassword";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import EditCourse from "./components/core/Dashboard/EditCourse";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import { useSelector } from "react-redux";
import Catelog from "./pages/Catelog";
import Course from "./pages/Course";
function App() {
  const { user } = useSelector((state) => state.profile);
  const {course}=useSelector((state)=>state.course);
 

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inte">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={signup} />
        <Route path="/verifyemail" Component={VerifyEmail} />
        <Route path="/forgot-password" Component={Forgetpasspage} />
        <Route path="/update-password/:id" Component={Updatepassword} />
        <Route path="/contact" Component={ContactUs} />
        <Route path="/about" Component={About} />
        <Route path="/Catelog/:categoryid" Component={Catelog} />
        <Route path="/Course/:CourseId" Component={Course} />

        {/* sidebar routes */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/my-profile" Component={Dashboard} />
          <Route path="/dashboard/setting" Component={Dashboard} />

          {/* {user !==null &&  user.accountType === "Instructor" && (
            <> */}
              <Route path="/dashboard/instructor" Component={Dashboard} />
              <Route path="/dashboard/my-courses" Component={Dashboard} />
              <Route path="/dashboard/add-course" Component={Dashboard} />
              <Route path="/dashboard/edit-course" Component={Dashboard} />

            {/* </>
          )} */}

          {/* {user!==null && user.accountType === "Student" && (
            <> */}
              <Route path="/dashboard/enrolled-courses" Component={Dashboard} />
              <Route path="/dashboard/cart" Component={Dashboard} />
            {/* </>
          )} */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
