import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../images/socialIcon/google.png";
import github from "../../../images/socialIcon/github.png";
import facebook from "../../../images/socialIcon/facebook.png";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();

  let errorElement;

  if (loading || loadingGithub || loadingFacebook) {
    return <Loading></Loading>;
  }

  if (error || errorGithub || errorFacebook) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {errorGithub?.message} {errorFacebook?.message}
      </p>
    );
  }

  if (user || userGithub || userFacebook) {
    return navigate("/home");
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="10" lg="5" className="mx-auto  bg-light rounded-bottom pb-5">
          <div className="d-flex align-items-center">
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            <p className="mt-2 px-2">or</p>
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          </div>
          {errorElement}
          <div>
            <Button
              variant="outline-primary"
              onClick={() => signInWithGoogle()}
              className="w-75 d-block mx-auto my-2"
            >
              <img style={{ width: "30px" }} src={google} alt="" />
              <span className="px-2">Google Sign In</span>
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => signInWithGithub()}
              className="w-75 d-block mx-auto my-2"
            >
              <img style={{ width: "30px" }} src={github} alt="" />
              <span className="px-2">Github Sign In</span>
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => signInWithFacebook()}
              className="w-75 d-block mx-auto my-2"
            >
              <img style={{ width: "30px" }} src={facebook} alt="" />
              <span className="px-2">facebook Sign In</span>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialLogin;
