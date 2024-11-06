const { PurgeCSS } = require("purgecss");
const fs = require("fs");

(async () => {
  const purgecss = await new PurgeCSS().purge({
    content: ["index.html"], // Your HTML file(s)
    css: ["css/style.css"], // Your CSS file(s)
  });

  // Write the purged CSS back to the file
  fs.writeFileSync("style.purged.css", purgecss[0].css);
})();
