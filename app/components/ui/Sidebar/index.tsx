import * as React from "react";
import {
  Box,
  Button,
  Drawer,
  Grid,
  Toolbar,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import theme from "~/lib/theme/theme";

const drawerWidth = 240;

const styles = {
  drawer: {
    width: 240,
    flexShrink: 0,
    borderRight: 0,
  },
  drawerOpen: {
    width: 240,
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#FF6B6B",
    padding: theme.spacing(2, 0, 3),
    borderRight: 0,
  },
  height: {
    height: "100%",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
  },
  title: {
    margin: theme.spacing(1),
    marginTop: 10,
  },
};

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#FF6B6B",
          color: "white",
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon sx={{ color: "white" }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText secondary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text} sx={{ color: "white" }}>
            <ListItemIcon sx={{ color: "white" }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText secondary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
