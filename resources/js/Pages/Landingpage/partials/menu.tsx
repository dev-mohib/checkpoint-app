import { Navbar, Dropdown, Button, Text } from "@nextui-org/react";
import { Link } from '@inertiajs/react'
import { Layout } from "./Layout";
// import { AcmeLogo } from "./AcmeLogo.js";
import { icons } from "./icons";

export default function App() {
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          {/* <AcmeLogo /> */}
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight"
        >
          <Dropdown>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Features
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                showFullDescription
                description="Receive real-time feedback and personalized recommendations to enhance your learning journey."
                icon={icons.scale}
              >
                Organizations
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Join a vibrant community of students, collaborate on projects, and access educational resources."
                icon={icons.activity}
              >
                Students
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="Connect with experienced teachers who are passionate about educating and guiding students towards success."
                icon={icons.flash}
              >
                Instructors
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
                description="Keep track of your grades and progress. Get valuable feedback from teachers to improve your performance."
                icon={icons.server}
              >
                Checkpoints
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item color="inherit">
            <Link href={route('login')}>Login</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href={route('register')}>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
