import SignInBtn from "./Buttons/SignInBtn";
import SignUpBtn from "./Buttons/SignUpBtn";
import '../styles/Auth.css';

const Home = () => {
    return (
        <div className="center-buttons">
            <SignInBtn />
            <SignUpBtn />
        </div>
    );
}

export default Home;