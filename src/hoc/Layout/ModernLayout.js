import React from "react";
import styled from "styled-components";

import Layout, {
  Root,
  getContent,
  getDrawerSidebar,
  getCollapseIcon,
} from "@mui-treasury/layout";

import { StylesProvider, CssBaseline } from "@material-ui/core";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import theme from "../../components/UI/Theme";

import MenuIcon from "@material-ui/icons/Menu";

import AppHeader from "../../components/UI/ModernLayout/AppHeader";

import AppSidebar from "../../components/UI/ModernLayout/AppSidebar";
import AppSubSidebar from "../../components/UI/ModernLayout/AppSubsidebar";
import CustomTrigger from "../../components/UI/ModernLayout/CustomTrigger";

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig("xs", {
    position: "fixed",
    clipped: true,
    initialHeight: 64,
  });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", { anchor: "left" })
    .registerPermanentConfig("xs", {
      width: 256,
      collapsible: true,
      collapsedWidth: 72,
    });

  builder
    .create("secondarySidebar", { anchor: "right" })
    .registerPersistentConfig("sm", {
      width: 56,
      collapsible: false,
      persistentBehavior: "fit",
    });
});

const CollapseIcon = getCollapseIcon(styled);
const Content = getContent(styled);
const DrawerSidebar = getDrawerSidebar(styled);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(1),
  },
}));

const ModernLayout = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Root
          theme={theme}
          scheme={scheme}
          initialState={{
            sidebar: {
              primarySidebar: { collapsed: true },
              secondarySidebar: { open: false },
            },
          }}
          className={classes.root}
        >
          <CssBaseline />
          <AppHeader>
            {
              <CollapseIcon variant="contained" sidebarId={"primarySidebar"}>
                {() => <MenuIcon />}
              </CollapseIcon>
            }
          </AppHeader>
          <DrawerSidebar sidebarId={"primarySidebar"}>
            <AppSidebar />
          </DrawerSidebar>
          <Content className={classes.content}>{props.children}</Content>
          <DrawerSidebar sidebarId={"secondarySidebar"}>
            <AppSubSidebar />
          </DrawerSidebar>
          <CustomTrigger />
        </Root>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default ModernLayout;
