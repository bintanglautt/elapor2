import { ReactSession } from "react-client-session";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BASE_URL } from "../config/config";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokenCookie, setTokenCookie] = useState("");

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (tokenCookie) return (window.location.href = "/");
  }, [tokenCookie]);

  const handleOnClick = async (e) => {
    e.preventDefault();

    const rawResponse = await fetch(`${BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const content = await rawResponse.json();
    const server = content["Server"][0];

    const { code, pesan } = server;

    if (code === "login_true") {
      const { data } = server;
      const { token } = data;

      ReactSession.set("token", token);
      setTokenCookie(token);
      return;
    }

    MySwal.fire({
      title: "Gagal Login",
      text: pesan,
      icon: "error",
    });
  };

  return (
    <>
      <Container className="my-5">
        <Card className="w-50 mx-auto">
          <Card.Header className="bg-success text-white">Login</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  placeholder="Input Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Input Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {/* <Form.Text className="text-muted">
                  Lupa Password? <a href=""> Reset</a>
                </Form.Text> */}
              </Form.Group>
              <Button variant="outline-success" onClick={handleOnClick}>
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
