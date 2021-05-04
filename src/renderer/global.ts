import { createMuiTheme } from "@material-ui/core";
import { blue, grey, indigo, pink } from "@material-ui/core/colors";
import { createHashHistory } from "history";
import log from "electron-log";
import { I18n } from "../tools/i18n";
import { constraints, readConfig, writeConfig } from "./config";
import enUs from "../assets/lang/en-us.json";
import zhCn from "../assets/lang/zh-cn.json";

const systemLanguage = navigator.language;
const defaultLanguage = systemLanguage.startsWith("zh") ? "zh-cn" : "en-us";
const lang = readConfig("language", defaultLanguage);

// global i18n toolkit class
export const i18n = new I18n({
  language: lang,
  messages: {
    "en-us": enUs,
    "zh-cn": zhCn,
  },
});

const java = readConfig("javaPath", undefined);
if (java === undefined) {
  writeConfig("javaPath", constraints.javaHome, true);
}

// global i18n translator shortcut
export const t = i18n.shortcut();

// global material-ui theme
export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: grey[100],
    },
    primary: {
      main: blue[600],
      contrastText: "#ffffff",
    },
    secondary: {
      main: pink[500],
      contrastText: "#ffffff",
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: indigo[400],
      contrastText: "#ffffff",
    },
    secondary: {
      main: blue[600],
      contrastText: "#ffffff",
    },
  },
});

// renderer process logger
export const logger = log.scope("renderer");

// global history for react-router
export const hist = createHashHistory();
