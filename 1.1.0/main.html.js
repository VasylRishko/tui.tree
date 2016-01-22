tui.util.defineNamespace("fedoc.content", {});
fedoc.content["main.html"] = "<div id=\"main\" class=\"readme\">\n\n\n\n    \n\n\n    <h3> </h3>\n\n\n\n\n\n\n\n\n\n\n    \n\n\n\n\n    <section class=\"main-content\">\n        <article><div class=\"readme\"><h1>Tree</h1><p>Tree component<br><br>Display the hierarchical data by tree.<br><br>Each node can be moved by drag and drop.</p>\n<h2>Feature</h2><ul>\n<li>Display hierarchical data by tree UI</li>\n<li>Fold sub tree</li>\n<li>Edit node</li>\n<li>Drag and drop</li>\n<li>Custom event</li>\n</ul>\n<h2>Documentation</h2><ul>\n<li><strong>API</strong> : https://nhnent.github.io/tui.component.tree/latest</li>\n<li><strong>Tutorial</strong> : https://github.com/nhnent/tui.component.tree/wiki/Tree-Tutorial</li>\n<li><strong>Sample</strong> - https://nhnent.github.io/tui.component.tree/latest/tutorial.html</li>\n</ul>\n<h2>Sample Image</h2><ul>\n<li>Default<br><br><img src=\"https://nhnent.github.io/tui.component.tree/tree.png\" alt=\"alt tag\"><br></li>\n<li>Label Apply<br><br><img src=\"https://nhnent.github.io/tui.component.tree/tree_edit.png\" alt=\"alt tag\"></li>\n</ul>\n<h2>Dependency</h2><ul>\n<li>tui-code-snippet: 1.0.4</li>\n</ul>\n<h2>Test environment</h2><ul>\n<li>PC<ul>\n<li>IE7~11</li>\n<li>Edge</li>\n<li>Chrome</li>\n<li>Firefox</li>\n<li>PhantomJS</li>\n</ul>\n</li>\n</ul>\n<h2>Download/Install</h2><ul>\n<li>Bower:<ul>\n<li>latest : <code>bower install tui-component-tree#master</code></li>\n<li>each version : <code>bower install tui-component-tree[#tag]</code></li>\n</ul>\n</li>\n<li>Download: https://github.com/nhnent/tui.component.tree</li>\n</ul>\n<h2>History</h2><table>\n<thead>\n<tr>\n<th>Version</th>\n<th>Description</th>\n<th>Date</th>\n<th>Developer</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a href=\"https://nhnent.github.io/tui.component.tree/1.1.0\">1.1.0</a></td>\n<td>CRUD nodes</td>\n<td>2016.01</td>\n<td>NHN Ent. FE dev team.<a href=\"&#x6d;&#97;&#x69;&#x6c;&#116;&#x6f;&#58;&#x64;&#x6c;&#x5f;&#106;&#x61;&#x76;&#x61;&#x73;&#x63;&#x72;&#x69;&#112;&#116;&#x40;&#x6e;&#x68;&#x6e;&#x65;&#110;&#116;&#x2e;&#x63;&#111;&#109;\">&#x64;&#x6c;&#x5f;&#106;&#x61;&#x76;&#x61;&#x73;&#x63;&#x72;&#x69;&#112;&#116;&#x40;&#x6e;&#x68;&#x6e;&#x65;&#110;&#116;&#x2e;&#x63;&#111;&#109;</a></td>\n</tr>\n<tr>\n<td>1.0.0a</td>\n<td>Namespace changed</td>\n<td>2015.10</td>\n<td>NHN Ent. FE dev team.<a href=\"&#109;&#x61;&#105;&#108;&#x74;&#x6f;&#58;&#x64;&#x6c;&#95;&#106;&#x61;&#118;&#97;&#115;&#99;&#x72;&#x69;&#x70;&#x74;&#64;&#110;&#x68;&#110;&#x65;&#110;&#x74;&#x2e;&#x63;&#111;&#109;\">&#x64;&#x6c;&#95;&#106;&#x61;&#118;&#97;&#115;&#99;&#x72;&#x69;&#x70;&#x74;&#64;&#110;&#x68;&#110;&#x65;&#110;&#x74;&#x2e;&#x63;&#111;&#109;</a></td>\n</tr>\n<tr>\n<td>1.0.0a</td>\n<td>defineNamespace Apply</td>\n<td>2015.05</td>\n<td>NHN Ent. FE dev team.<a href=\"&#109;&#97;&#105;&#108;&#116;&#111;&#x3a;&#x64;&#x6c;&#95;&#106;&#97;&#x76;&#97;&#x73;&#x63;&#114;&#105;&#112;&#x74;&#x40;&#110;&#x68;&#110;&#101;&#110;&#x74;&#x2e;&#99;&#111;&#x6d;\">&#x64;&#x6c;&#95;&#106;&#97;&#x76;&#97;&#x73;&#x63;&#114;&#105;&#112;&#x74;&#x40;&#110;&#x68;&#110;&#101;&#110;&#x74;&#x2e;&#99;&#111;&#x6d;</a></td>\n</tr>\n<tr>\n<td><a href=\"https://nhnent.github.io/tui.component.tree/1.0.0\">1.0.0</a></td>\n<td>Release</td>\n<td>2015.03</td>\n<td>NHN Ent. FE dev team.<a href=\"&#109;&#x61;&#x69;&#x6c;&#116;&#x6f;&#x3a;&#x64;&#x6c;&#x5f;&#x6a;&#97;&#118;&#97;&#x73;&#99;&#x72;&#105;&#x70;&#x74;&#x40;&#x6e;&#x68;&#110;&#101;&#x6e;&#116;&#x2e;&#x63;&#111;&#109;\">&#x64;&#x6c;&#x5f;&#x6a;&#97;&#118;&#97;&#x73;&#99;&#x72;&#105;&#x70;&#x74;&#x40;&#x6e;&#x68;&#110;&#101;&#x6e;&#116;&#x2e;&#x63;&#111;&#109;</a></td>\n</tr>\n<tr>\n<td>0.9.0</td>\n<td>Ticklink apply</td>\n<td>2015.01</td>\n<td>NHN Ent. FE dev team. <a href=\"&#109;&#97;&#x69;&#108;&#x74;&#x6f;&#58;&#100;&#x6c;&#x5f;&#x6a;&#x61;&#x76;&#x61;&#x73;&#99;&#x72;&#105;&#112;&#x74;&#x40;&#110;&#x68;&#110;&#101;&#x6e;&#x74;&#46;&#99;&#111;&#109;\">&#100;&#x6c;&#x5f;&#x6a;&#x61;&#x76;&#x61;&#x73;&#99;&#x72;&#105;&#112;&#x74;&#x40;&#110;&#x68;&#110;&#101;&#x6e;&#x74;&#46;&#99;&#111;&#109;</a></td>\n</tr>\n</tbody>\n</table>\n<h2>LICENSE</h2><p><a href=\"LICENSE\">MIT LICENSE</a></p>\n<h2>Sponsor</h2><ul>\n<li><img src=\"https://cloud.githubusercontent.com/assets/12269563/12287774/8cf4d2c0-ba12-11e5-9fa8-0a9c452cca05.png\" height=\"30\"><br><br><a href=\"https://www.browserstack.com/\">BrowserStack</a> is a cloud based cross browser testing tool</li>\n</ul></div></article>\n    </section>\n\n\n\n\n\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        states.js\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>States in tree</p></div>\n        \n\n        \n\n\n<dl class=\"details main-detail\">\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-source\">Source:</dt>\n        <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n            file, line 1\n        </li></ul></dd>\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        tree.js\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>Render tree and update tree.</p></div>\n        \n\n        \n\n\n<dl class=\"details main-detail\">\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-author\">Author:</dt>\n    <dd class=\"tag-author\">\n        <ul>\n            <li>NHN Ent. FE dev team.&lt;dl_javascript@nhnent.com></li>\n        </ul>\n    </dd>\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-source\">Source:</dt>\n        <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n            file, line 1\n        </li></ul></dd>\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        treeModel.js\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>Update view and control tree data</p></div>\n        \n\n        \n\n\n<dl class=\"details main-detail\">\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-author\">Author:</dt>\n    <dd class=\"tag-author\">\n        <ul>\n            <li>NHN Ent. FE dev team.&lt;dl_javascript@nhnent.com></li>\n        </ul>\n    </dd>\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-source\">Source:</dt>\n        <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n            file, line 1\n        </li></ul></dd>\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        util.js\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>Helper object to make easy tree elements</p></div>\n        \n\n        \n\n\n<dl class=\"details main-detail\">\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-author\">Author:</dt>\n    <dd class=\"tag-author\">\n        <ul>\n            <li>NHN Ent. FE dev team.&lt;dl_javascript@nhnent.com></li>\n        </ul>\n    </dd>\n    \n\n    \n\n    \n\n    \n\n    \n    <dt class=\"tag-source\">Source:</dt>\n        <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n            file, line 1\n        </li></ul></dd>\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"