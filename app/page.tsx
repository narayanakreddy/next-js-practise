"use client";
import { Button, Form, Input } from "antd";

export default function Home() {
  return (
    <div className="login-container height">
      <div className="row height">
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 d-none d-lg-block">
          layout
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
          <div className="d-flex flex-column height  justify-content-center">
            <p>test data</p>
            <Form layout="vertical">
              <div style={{ position: "relative" }}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: "Required Field" }]}
                >
                  <Input size="large" placeholder="Username" />
                </Form.Item>
              </div>
              <div style={{ position: "relative" }}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: "Required Field" }]}
                >
                  <Input.Password
                    className="login-password"
                    maxLength={20}
                    size="large"
                    placeholder="Password"
                  />
                </Form.Item>
              </div>

              {/* <span
          className="text-end d-block auth-link-style"
          style={{ marginTop: "-10px" }}
        >
          Forgot Password?
        </span> */}

              <Button
                style={{ marginLeft: 0 }}
                className="login-button mt-2 mb-3"
                block
                size="large"
                type="primary"
                htmlType="submit"
              >
                Sign In
              </Button>

              {/* <span className="text-center d-block">
          Not You?{" "}
          <span
            className="auth-link-style"
            style={{ textDecoration: "underline" }}
          >
            Login using different email address
          </span>
        </span> */}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
