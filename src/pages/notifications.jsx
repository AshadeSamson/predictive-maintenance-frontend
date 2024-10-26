import React, { useEffect, useState } from "react";
import {
  DivOne,
  Section,
  DivTwo,
  DivBox,
  FlexOne,
  FlexTwo,
  FlexThree,
} from "../styles/workshop.styled";
import { theme } from "../styles/theme";

import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  Typography,
  Alert,
  AlertTitle,
  List,
  ListItem,
  IconButton,
  Snackbar,
} from "@mui/material";
//import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/notifications.css"; // Import your custom CSS for animations
import { deleteNotification, getNotifications } from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "20px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
  },
  alert: {
    marginBottom: "15px",
  },
  list: {
    padding: 0,
  },
  listItem: {
    padding: "10px 0",
  },
}));

const notifications = [
  {
    id: 1,
    type: "warning",
    title: "High Temperature Alert",
    message: "Machine 5 is operating at a high temperature.",
  },
  {
    id: 2,
    type: "error",
    title: "Voltage Drop Detected",
    message: "Machine 2 has experienced a sudden voltage drop.",
  },
  {
    id: 3,
    type: "info",
    title: "Routine Maintenance Required",
    message: "Machine 8 is due for routine maintenance.",
  },
  {
    id: 4,
    type: "success",
    title: "All Systems Normal",
    message: "All machines are operating within normal parameters.",
  },
];

function Notifications() {
  const classes = useStyles();
  const [visibleNotifications, setVisibleNotifications] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const result = await getNotifications();
      if (result.success) {
        setVisibleNotifications(result.data);
      }
    } catch (error) {
      console.log("Error Fetching Notifications");
    } finally {
      setLoading(false);
    }
  };

  const handleDismiss = async (id) => {
    try {
      setLoading(true);
      const result = await deleteNotification(id);
      if (result.success) {
        // setVisibleNotifications((prev) => prev.filter((notif) => notif.id !== id));
        // setSnackbarOpen(true);
        await fetchNotifications();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);
  return (
    <Section>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Notifications
          </Typography>
          <TransitionGroup>
            {visibleNotifications.map((notification) => (
              <CSSTransition
                key={notification.id}
                timeout={500}
                classNames="fade"
              >
                <List>
                  <ListItem>
                    <Alert
                      severity={notification.type}
                      className={classes.alert}
                      action={
                        <IconButton
                          edge="end"
                          aria-label="close"
                          color="inherit"
                          className={classes.closeButton}
                          onClick={() => handleDismiss(notification.id)}
                        >
                          {!loading ? <CloseIcon /> : "..."}
                        </IconButton>
                      }
                    >
                      <AlertTitle>{notification.title}</AlertTitle>
                      {notification.message}
                    </Alert>
                  </ListItem>
                </List>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </CardContent>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Notification dismissed"
        />
      </Card>
    </Section>
  );
}

export default Notifications;
