import { Box, Typography, Divider } from "@mui/material";
import { format } from "date-fns";

const NotificationsComp = () => {
  const notifications = [
    { id: 1, message: "You have a new message", timestamp: new Date() },
    { id: 2, message: "Meeting at 2:00 PM", timestamp: new Date() },
    { id: 3, message: "Task deadline approaching", timestamp: new Date() },
  ];

  return (
    <Box sx={{paddingTop: "16px"}}>
      {notifications.map((notification) => (
        <div key={notification.id}>
          <Box
            sx={{
              border: "1px solid white",
              borderRadius: "4px",
              padding: "10px",
              marginBottom: "8px",
              marginTop: "4px",
              marginRight: "8px",
              marginLeft: "8px",
              position: "relative",
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>{notification.message}</Typography>
            <Typography
              variant="caption"
              sx={{ position: "absolute", top: 0, right: 0, color: "skyblue", paddingRight: "8px" }}
            >
              {format(notification.timestamp, "MMM d, yyyy HH:mm")}
            </Typography>
          </Box>
          <Divider />
        </div>
      ))}
    </Box>
  );
};

export default NotificationsComp;
