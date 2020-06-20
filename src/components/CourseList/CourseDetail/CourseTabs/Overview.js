import React, { Fragment } from "react";

import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import { Check, Create } from "@material-ui/icons";

export default function Overview() {
  return (
    <Fragment>
      <Box mt={1}>
        <Typography variant="h5" gutterBottom>
          Description
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Description Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim veniam, quis nostrud exerci
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
          What You’ll Learn
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Setting up the environment" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Advanced HTML Practices" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Build a portfolio website" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Responsive Designs" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Understand HTML Programming" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Code HTML" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Start building beautiful websites" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
          Requirements
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Create />
                </ListItemIcon>
                <ListItemText primary="Any computer will work: Windows, macOS or Linux" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Create />
                </ListItemIcon>
                <ListItemText primary="Basic programming HTML and CSS." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Create />
                </ListItemIcon>
                <ListItemText primary="Basic/Minimal understanding of JavaScript" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      <Box mt={2}>
        <Typography variant="h5" gutterBottom>
          Here Is Exactly What We Cover In This Course:
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
          ea commodo consequat. Nam liber tempor cum soluta nobis eleifend
          option congue nihil imperdiet doming id quod mazim placerat facer
          possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat.
        </Typography>
      </Box>
    </Fragment>
  );
}
