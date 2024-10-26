import React, { useEffect, useState } from "react";
import {
  Gridboard,
  Main,
  Sidebar,
  StyledNav,
  MenuBox,
} from "../styles/dashboard.styled";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { HamburgerButton } from "../styles/dashboard.styled.js";
import { DashboardContainer } from "../styles/container.js";
import HomeIcon from "@mui/icons-material/Home";
import FactoryIcon from "@mui/icons-material/Factory";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import styled from "styled-components";
import Header from "../components/header.jsx"; // Import Header Component
import { getAllMachines } from "../utils/utils.js";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [machines, setMachines] = useState([]);
  const [isOpen, setIsOpen] = useState(() => false);
  const [selectedMachine, setSelectedMachine] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSelectChange(event) {
    const selectedMachineId = event.target.value;
    setSelectedMachine(selectedMachineId);
    if (selectedMachineId) {
      navigate(`machines/${selectedMachineId}`);
      showSnackbar("Machine selected successfully", "success");
    }
  }

  function showSnackbar(message, severity) {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const isStatusPage = location.pathname.includes("/machines");

  // Styled NavLink with hover effect
  const IconLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    border-radius: 8px;

    &:hover {
      color: #1976d2; /* MUI primary color */
      background-color: #e3f2fd; /* Light blue background on hover */
    }
  `;

  useEffect(() => {
    const getMachines = async () => {
      try {
        setLoading(true);
        const result = await getAllMachines();
        if (result.success) {
          setMachines(result?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMachines();
  }, []);
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <DashboardContainer>
        <Gridboard>
          <Sidebar isOpen={isOpen}>
            <StyledNav>
              <MenuBox isOpen={isOpen}>
                <IconLink to="../">
                  <h1>PMSF Workshop</h1>
                </IconLink>
                <IconLink to="." end>
                  <HomeIcon />
                  Home
                </IconLink>
                <IconLink to="machines">
                  <FactoryIcon />
                  Status of Machines
                </IconLink>
                <IconLink to="notifications">
                  <NotificationsIcon />
                  Notifications
                </IconLink>
              </MenuBox>
            </StyledNav>
          </Sidebar>
          <Main>
            <header>
              <HamburgerButton onClick={toggleMenu}>&#9776;</HamburgerButton>
            </header>
            <div>
              <div
                style={{
                  width: "100%",

                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  paddingRight: 50,
                }}
              >
                {isStatusPage && (
                  <FormControl margin="normal">
                    <InputLabel id="select-machine-label">
                      Select a Machine
                    </InputLabel>
                    <Select
                      labelId="select-machine-label"
                      value={selectedMachine}
                      onChange={handleSelectChange}
                      displayEmpty
                      renderValue={(value) =>
                        value ? `Machine ${value}` : "Select a machine"
                      }
                    >
                      <MenuItem value="" disabled>
                        <em>Select a machine</em>
                      </MenuItem>
                      {machines.map((machine) => (
                        <MenuItem key={machine?.id} value={machine?.id}>
                          Machine {machine?.id}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </div>
              <Outlet />
            </div>
          </Main>
        </Gridboard>
      </DashboardContainer>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Dashboard;
