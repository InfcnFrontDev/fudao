import config from "./config";
import _ from "lodash";
import request from "./request";
import urls from "./urls";
import storage from "./storage";
import constants from "./constants";
import theme from "./theme";
import tools from "./tools";

global.config = config;
global._ = _;
global.request = request;
//noinspection JSAnnotator
global.urls = urls;
global.storage = storage;
global.constants = constants;
global.theme = theme;
//noinspection JSAnnotator
global.tools = tools;