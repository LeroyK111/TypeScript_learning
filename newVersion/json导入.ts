#!/usr/bin/env node
"use strict";



import myConfigA from "./myConfig.json" with { type: "json" };
let version = myConfigA.version;