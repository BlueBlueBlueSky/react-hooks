"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");exports.useRefState=function(t){var r=e.useState(t),u=r[0],s=r[1],a=e.useRef(t);return[u,e.useCallback((function(e){s(e),a.current=e}),[s]),a]};
