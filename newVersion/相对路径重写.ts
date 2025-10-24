#!/usr/bin/env node
"use strict";

import * as foo from "./foo.ts"; // <- 这里需要 foo.ts，而不是 foo.js

/**
 * @author Leroy
 * 通常情况下，如果我们这样写，TypeScript 会报错，因为它期望我们导入的是输出文件。由于有些工具允许 .ts 导入，TypeScript 早已通过一个名为 --allowImportingTsExtensions 的选项支持这种导入方式。这种做法虽然可行，但如果我们需要真正将这些 .ts 文件生成 .js 文件呢？这对于那些需要分发 .js 文件的库作者来说是一个需求。但在此之前，TypeScript 一直避免重写任何路径。为了支持这种情况，我们新增了一个编译选项 --rewriteRelativeImportExtensions。当导入路径是相对路径（以 ./ 或 ../ 开头），以 TypeScript 扩展名（.ts、.tsx、.mts、.cts）结尾，并且是非声明文件时，编译器会将路径重写为相应的 JavaScript 扩展名（.js、.jsx、.mjs、.cjs）。
 *
 *
 *
 */

// 在使用 --rewriteRelativeImportExtensions 选项时...

// 这些路径会被重写。
import * as foo from "./foo.ts";
import * as bar from "../someFolder/bar.mts";

// 这些路径不会以任何方式被重写。
import * as a from "./foo";
import * as b from "some-package/file.ts";
import * as c from "@some-scope/some-package/file.ts";
import * as d from "#/file.ts";
import * as e from "./file.js";


/**
 * 
 * 


function getPath() {
  if (Math.random() < 0.17) {
    return "./foo.ts";
  } else {
    return "./foo.js";
  }
}

let myImport = await import(getPath());
// 还有一个问题是（如上所述）只有相对路径会被重写，并且它们是“天真地”被重写。这意味着任何依赖 TypeScript 的 baseUrl 和 paths 的路径将不会被重写：


{
    "compilerOptions": {
        "module": "nodenext",
        // ...
        "paths": {
            "@/*": ["./src/*"]
        }
    }
}

// 不会被转换，不会生效。
import * as utilities from "@/utilities.ts";


// 同样，任何可能通过 package.json 的 exports 和 imports 字段解析的路径也不会被重写：
// package.json
{
    "name": "my-package",
    "imports": {
        "#root/*": "./dist/*"
    }
}

// 不会被转换，不会生效。
import * as utilities from "#root/utilities.ts";

因此，如果你一直在使用带有多个包相互引用的工作空间式布局，可能需要使用带有作用范围的条件导出，以使其生效：
// my-package/package.json

{
    "name": "my-package",
    "exports": {
        ".": {
            "@my-package/development": "./src/index.ts",
            "import": "./lib/index.js"
        },
        "./*": {
            "@my-package/development": "./src/*.ts",
            "import": "./lib/*.js"
        }
    }
}
每次你想要导入 .ts 文件时，可以使用 node --conditions=@my-package/development 运行。注意我们为条件使用的作用域 @my-package/development。这是为了避免与可能也使用 development 条件的依赖项发生冲突而做出的权宜之计。如果每个包都在他们的包里导出 development，那么解析过程可能会尝试解析 .ts 文件，这不一定能成功。
*/




