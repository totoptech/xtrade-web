import { i as createVNode, F as Fragment, s as spreadAttributes } from './astro.8a1fcc00.mjs';
import '@astrojs/internal-helpers/path';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'slash';
import 'node:fs/promises';
import './pages/404.astro.3b1f3a71.mjs';
import 'html-escaper';
import 'fs';
import 'path';
/* empty css                        */import 'zod';
/* empty css                                                             */import 'execa';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<!-- Generated by documentation.js. Update this documentation by updating the source code. -->\n<h3 id=\"table-of-contents\">Table of Contents</h3>\n<ul>\n<li><a href=\"#tradexchart\">TradeXchart</a>\n<ul>\n<li><a href=\"#start\">start</a>\n<ul>\n<li><a href=\"#parameters\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#on\">on</a>\n<ul>\n<li><a href=\"#parameters-1\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#off\">off</a>\n<ul>\n<li><a href=\"#parameters-2\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#emit\">emit</a>\n<ul>\n<li><a href=\"#parameters-3\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#execute\">execute</a>\n<ul>\n<li><a href=\"#parameters-4\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#delayedsetrange\">delayedSetRange</a></li>\n<li><a href=\"#updaterange\">updateRange</a>\n<ul>\n<li><a href=\"#parameters-5\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#isindicator\">isIndicator</a>\n<ul>\n<li><a href=\"#parameters-6\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#setindicators\">setIndicators</a>\n<ul>\n<li><a href=\"#parameters-7\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#addindicator\">addIndicator</a>\n<ul>\n<li><a href=\"#parameters-8\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#getindicator\">getIndicator</a>\n<ul>\n<li><a href=\"#parameters-9\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#removeindicator\">removeIndicator</a>\n<ul>\n<li><a href=\"#parameters-10\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#indicatorsettings\">indicatorSettings</a>\n<ul>\n<li><a href=\"#parameters-11\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#hasstateindicator\">hasStateIndicator</a>\n<ul>\n<li><a href=\"#parameters-12\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#create\">create</a>\n<ul>\n<li><a href=\"#parameters-13\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#destroy\">destroy</a>\n<ul>\n<li><a href=\"#parameters-14\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#destroy-1\">destroy</a></li>\n<li><a href=\"#setdimensions\">setDimensions</a>\n<ul>\n<li><a href=\"#parameters-15\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#setpriceprecision\">setPricePrecision</a>\n<ul>\n<li><a href=\"#parameters-16\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#setvolumeprecision\">setVolumePrecision</a>\n<ul>\n<li><a href=\"#parameters-17\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#addtheme\">addTheme</a>\n<ul>\n<li><a href=\"#parameters-18\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#settheme\">setTheme</a>\n<ul>\n<li><a href=\"#parameters-19\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#setstream\">setStream</a>\n<ul>\n<li><a href=\"#parameters-20\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#getrange\">getRange</a>\n<ul>\n<li><a href=\"#parameters-21\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#setrange\">setRange</a>\n<ul>\n<li><a href=\"#parameters-22\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#mergedata\">mergeData</a>\n<ul>\n<li><a href=\"#parameters-23\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#resize\">resize</a>\n<ul>\n<li><a href=\"#parameters-24\">Parameters</a></li>\n</ul>\n</li>\n<li><a href=\"#refresh\">refresh</a></li>\n</ul>\n</li>\n</ul>\n<h2 id=\"tradexchart\">TradeXchart</h2>\n<p>The root class for the entire chart</p>\n<h3 id=\"start\">start</h3>\n<p>Target element has been validated as a mount point,\nlet’s start building</p>\n<h4 id=\"parameters\">Parameters</h4>\n<ul>\n<li><code>cfg</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> chart configuration</li>\n</ul>\n<h3 id=\"on\">on</h3>\n<p>Subscribe to a topic</p>\n<h4 id=\"parameters-1\">Parameters</h4>\n<ul>\n<li><code>topic</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> The topic name</li>\n<li><code>handler</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function\">Function</a></strong> The function or method that is called</li>\n<li><code>context</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> The context the function(s) belongs to</li>\n</ul>\n<h3 id=\"off\">off</h3>\n<p>Unsubscribe from a topic</p>\n<h4 id=\"parameters-2\">Parameters</h4>\n<ul>\n<li><code>topic</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> The topic name</li>\n<li><code>handler</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function\">Function</a></strong> function to remove</li>\n</ul>\n<h3 id=\"emit\">emit</h3>\n<p>Publish an topic</p>\n<h4 id=\"parameters-3\">Parameters</h4>\n<ul>\n<li><code>topic</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> The topic name</li>\n<li><code>data</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> The data to publish</li>\n</ul>\n<h3 id=\"execute\">execute</h3>\n<p>Execute a task</p>\n<h4 id=\"parameters-4\">Parameters</h4>\n<ul>\n<li><code>channel</code>  </li>\n<li><code>data</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> The data that gets published</li>\n<li><code>cb</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function\">Function</a></strong> callback method</li>\n<li><code>topic</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> The topic name</li>\n</ul>\n<h3 id=\"delayedsetrange\">delayedSetRange</h3>\n<p>When chart is empty postpone range setting\nuntil first candle, then position on last</p>\n<h3 id=\"updaterange\">updateRange</h3>\n<p>Calculate new range index / position from position difference\ntypically mouse drag or cursor keys</p>\n<h4 id=\"parameters-5\">Parameters</h4>\n<ul>\n<li><code>pos</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array\">array</a></strong> [x2, y2, x1, y1, xdelta, ydelta]</li>\n</ul>\n<h3 id=\"isindicator\">isIndicator</h3>\n<p>validate indicator</p>\n<h4 id=\"parameters-6\">Parameters</h4>\n<ul>\n<li><code>i</code> <strong>class</strong> indicator class</li>\n</ul>\n<h3 id=\"setindicators\">setIndicators</h3>\n<p>import Indicators</p>\n<h4 id=\"parameters-7\">Parameters</h4>\n<ul>\n<li><code>i</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> indicators {id, name, event, ind}</li>\n<li><code>flush</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">boolean</a></strong> expunge default indicators (optional, default <code>false</code>)</li>\n</ul>\n<p>Returns <strong>any</strong> boolean</p>\n<h3 id=\"addindicator\">addIndicator</h3>\n<p>add an indicator - default or registered user defined</p>\n<h4 id=\"parameters-8\">Parameters</h4>\n<ul>\n<li><code>i</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> indicator</li>\n<li><code>name</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> identifier (optional, default <code>i</code>)</li>\n<li><code>params</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> {settings, data} (optional, default <code>{}</code>)</li>\n</ul>\n<p>Returns <strong>(Indicator | <code>false</code>)</strong> indicator instance or false</p>\n<h3 id=\"getindicator\">getIndicator</h3>\n<p>retrieve indicator by ID</p>\n<h4 id=\"parameters-9\">Parameters</h4>\n<ul>\n<li><code>i</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> indicator ID</li>\n</ul>\n<h3 id=\"removeindicator\">removeIndicator</h3>\n<p>remove an indicator - default or registered user defined</p>\n<h4 id=\"parameters-10\">Parameters</h4>\n<ul>\n<li><code>i</code> <strong>(<a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a> | Indicator)</strong> indicator id or Indicator instance</li>\n</ul>\n<p>Returns <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">boolean</a></strong> success / failure</p>\n<h3 id=\"indicatorsettings\">indicatorSettings</h3>\n<p>set or get indicator settings</p>\n<h4 id=\"parameters-11\">Parameters</h4>\n<ul>\n<li><code>i</code> <strong>(<a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a> | Indicator)</strong> indicator id or Indicator instance</li>\n<li><code>s</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> settings</li>\n</ul>\n<p>Returns <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">boolean</a></strong> success / failure</p>\n<h3 id=\"hasstateindicator\">hasStateIndicator</h3>\n<p>Does current chart state have indicator</p>\n<h4 id=\"parameters-12\">Parameters</h4>\n<ul>\n<li><code>i</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> indicator id or name</li>\n<li><code>dataset</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong>  (optional, default <code>\"searchAll\"</code>)</li>\n</ul>\n<p>Returns <strong>any</strong> indicator or false</p>\n<h3 id=\"create\">create</h3>\n<p>Create a new TradeXchart instance</p>\n<h4 id=\"parameters-13\">Parameters</h4>\n<ul>\n<li><code>txCfg</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> chart config (optional, default <code>{}</code>)</li>\n<li><code>container</code> <strong>DOM_element</strong> HTML element to mount the chart on</li>\n<li><code>state</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> chart state</li>\n</ul>\n<p>Returns <strong>instance</strong> </p>\n<h3 id=\"destroy\">destroy</h3>\n<p>Destroy a chart instance, clean up and remove data</p>\n<h4 id=\"parameters-14\">Parameters</h4>\n<ul>\n<li><code>chart</code> <strong>instance</strong> </li>\n</ul>\n<h3 id=\"destroy-1\">destroy</h3>\n<p>Stop all chart event processing and remove the chart from DOM.\nIn other words, destroy the chart.</p>\n<h3 id=\"setdimensions\">setDimensions</h3>\n<p>Set chart width and height</p>\n<h4 id=\"parameters-15\">Parameters</h4>\n<ul>\n<li><code>w</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> width in pixels</li>\n<li><code>h</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> height in pixels</li>\n</ul>\n<h3 id=\"setpriceprecision\">setPricePrecision</h3>\n<p>Set the price accuracy</p>\n<h4 id=\"parameters-16\">Parameters</h4>\n<ul>\n<li><code>pricePrecision</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Price accuracy</li>\n</ul>\n<h3 id=\"setvolumeprecision\">setVolumePrecision</h3>\n<p>Set the volume accuracy</p>\n<h4 id=\"parameters-17\">Parameters</h4>\n<ul>\n<li><code>volumePrecision</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Volume accuracy</li>\n</ul>\n<h3 id=\"addtheme\">addTheme</h3>\n<p>Add a theme to the chart,\nif no current theme is set, make this the current one.</p>\n<h4 id=\"parameters-18\">Parameters</h4>\n<ul>\n<li><code>theme</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> Volume accuracy</li>\n</ul>\n<p>Returns <strong>instance</strong> theme instance</p>\n<h3 id=\"settheme\">setTheme</h3>\n<p>Set the chart theme</p>\n<h4 id=\"parameters-19\">Parameters</h4>\n<ul>\n<li><code>ID</code>  </li>\n<li><code>theme</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> theme identifier</li>\n</ul>\n<h3 id=\"setstream\">setStream</h3>\n<p>specify a chart stream</p>\n<h4 id=\"parameters-20\">Parameters</h4>\n<ul>\n<li><code>stream</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> </li>\n</ul>\n<p>Returns <strong>instance</strong> </p>\n<h3 id=\"getrange\">getRange</h3>\n<p>initialize range</p>\n<h4 id=\"parameters-21\">Parameters</h4>\n<ul>\n<li><code>start</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> index (optional, default <code>0</code>)</li>\n<li><code>end</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> index (optional, default <code>0</code>)</li>\n<li><code>config</code>   (optional, default <code>{}</code>)</li>\n</ul>\n<h3 id=\"setrange\">setRange</h3>\n<p>set start and end of range</p>\n<h4 id=\"parameters-22\">Parameters</h4>\n<ul>\n<li><code>start</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> index (optional, default <code>0</code>)</li>\n<li><code>end</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> index (optional, default <code>this.rangeLimit</code>)</li>\n</ul>\n<h3 id=\"mergedata\">mergeData</h3>\n<p>Merge a block of data into the chart state.\nUsed for populating a chart with back history.\nMerge data must be formatted to a Chart State.\nOptionally set a new range upon merge.</p>\n<h4 id=\"parameters-23\">Parameters</h4>\n<ul>\n<li><code>merge</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> merge data must be formatted to a Chart State</li>\n<li><code>newRange</code> <strong>(<a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">boolean</a> | <a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a>)</strong> false | {start: number, end: number} (optional, default <code>false</code>)</li>\n<li><code>calc</code>   (optional, default <code>true</code>)</li>\n</ul>\n<h3 id=\"resize\">resize</h3>\n<p>Resize the chart</p>\n<h4 id=\"parameters-24\">Parameters</h4>\n<ul>\n<li><code>width</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> pixels</li>\n<li><code>height</code> <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> pixels</li>\n</ul>\n<p>Returns <strong><a href=\"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">boolean</a></strong> success or failure</p>\n<h3 id=\"refresh\">refresh</h3>\n<p>refresh / redraw the chart</p>");

				const frontmatter = {"title":"core - documentation.js"};
				const file = "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/src/content/docs/api/core-old.md";
				const url = undefined;
				function rawContent() {
					return "\n<!-- Generated by documentation.js. Update this documentation by updating the source code. -->\n\n### Table of Contents\n\n*   [TradeXchart][1]\n    *   [start][2]\n        *   [Parameters][3]\n    *   [on][4]\n        *   [Parameters][5]\n    *   [off][6]\n        *   [Parameters][7]\n    *   [emit][8]\n        *   [Parameters][9]\n    *   [execute][10]\n        *   [Parameters][11]\n    *   [delayedSetRange][12]\n    *   [updateRange][13]\n        *   [Parameters][14]\n    *   [isIndicator][15]\n        *   [Parameters][16]\n    *   [setIndicators][17]\n        *   [Parameters][18]\n    *   [addIndicator][19]\n        *   [Parameters][20]\n    *   [getIndicator][21]\n        *   [Parameters][22]\n    *   [removeIndicator][23]\n        *   [Parameters][24]\n    *   [indicatorSettings][25]\n        *   [Parameters][26]\n    *   [hasStateIndicator][27]\n        *   [Parameters][28]\n    *   [create][29]\n        *   [Parameters][30]\n    *   [destroy][31]\n        *   [Parameters][32]\n    *   [destroy][33]\n    *   [setDimensions][34]\n        *   [Parameters][35]\n    *   [setPricePrecision][36]\n        *   [Parameters][37]\n    *   [setVolumePrecision][38]\n        *   [Parameters][39]\n    *   [addTheme][40]\n        *   [Parameters][41]\n    *   [setTheme][42]\n        *   [Parameters][43]\n    *   [setStream][44]\n        *   [Parameters][45]\n    *   [getRange][46]\n        *   [Parameters][47]\n    *   [setRange][48]\n        *   [Parameters][49]\n    *   [mergeData][50]\n        *   [Parameters][51]\n    *   [resize][52]\n        *   [Parameters][53]\n    *   [refresh][54]\n\n## TradeXchart\n\nThe root class for the entire chart\n\n### start\n\nTarget element has been validated as a mount point,\nlet's start building\n\n#### Parameters\n\n*   `cfg` **[object][55]** chart configuration\n\n### on\n\nSubscribe to a topic\n\n#### Parameters\n\n*   `topic` **[String][56]** The topic name\n*   `handler` **[Function][57]** The function or method that is called\n*   `context` **[Object][55]** The context the function(s) belongs to\n\n### off\n\nUnsubscribe from a topic\n\n#### Parameters\n\n*   `topic` **[String][56]** The topic name\n*   `handler` **[Function][57]** function to remove\n\n### emit\n\nPublish an topic\n\n#### Parameters\n\n*   `topic` **[String][56]** The topic name\n*   `data` **[Object][55]** The data to publish\n\n### execute\n\nExecute a task\n\n#### Parameters\n\n*   `channel` &#x20;\n*   `data` **[Object][55]** The data that gets published\n*   `cb` **[Function][57]** callback method\n*   `topic` **[String][56]** The topic name\n\n### delayedSetRange\n\nWhen chart is empty postpone range setting\nuntil first candle, then position on last\n\n### updateRange\n\nCalculate new range index / position from position difference\ntypically mouse drag or cursor keys\n\n#### Parameters\n\n*   `pos` **[array][58]** \\[x2, y2, x1, y1, xdelta, ydelta]\n\n### isIndicator\n\nvalidate indicator\n\n#### Parameters\n\n*   `i` **class** indicator class\n\n### setIndicators\n\nimport Indicators\n\n#### Parameters\n\n*   `i` **[object][55]** indicators {id, name, event, ind}\n*   `flush` **[boolean][59]** expunge default indicators (optional, default `false`)\n\nReturns **any** boolean\n\n### addIndicator\n\nadd an indicator - default or registered user defined\n\n#### Parameters\n\n*   `i` **[string][56]** indicator\n*   `name` **[string][56]** identifier (optional, default `i`)\n*   `params` **[object][55]** {settings, data} (optional, default `{}`)\n\nReturns **(Indicator | `false`)** indicator instance or false\n\n### getIndicator\n\nretrieve indicator by ID\n\n#### Parameters\n\n*   `i` **[string][56]** indicator ID\n\n### removeIndicator\n\nremove an indicator - default or registered user defined\n\n#### Parameters\n\n*   `i` **([string][56] | Indicator)** indicator id or Indicator instance\n\nReturns **[boolean][59]** success / failure\n\n### indicatorSettings\n\nset or get indicator settings\n\n#### Parameters\n\n*   `i` **([string][56] | Indicator)** indicator id or Indicator instance\n*   `s` **[object][55]** settings\n\nReturns **[boolean][59]** success / failure\n\n### hasStateIndicator\n\nDoes current chart state have indicator\n\n#### Parameters\n\n*   `i` **[string][56]** indicator id or name\n*   `dataset` **[string][56]**  (optional, default `\"searchAll\"`)\n\nReturns **any** indicator or false\n\n### create\n\nCreate a new TradeXchart instance\n\n#### Parameters\n\n*   `txCfg` **[object][55]** chart config (optional, default `{}`)\n*   `container` **DOM\\_element** HTML element to mount the chart on\n*   `state` **[object][55]** chart state\n\nReturns **instance**&#x20;\n\n### destroy\n\nDestroy a chart instance, clean up and remove data\n\n#### Parameters\n\n*   `chart` **instance**&#x20;\n\n### destroy\n\nStop all chart event processing and remove the chart from DOM.\nIn other words, destroy the chart.\n\n### setDimensions\n\nSet chart width and height\n\n#### Parameters\n\n*   `w` **[number][60]** width in pixels\n*   `h` **[number][60]** height in pixels\n\n### setPricePrecision\n\nSet the price accuracy\n\n#### Parameters\n\n*   `pricePrecision` **[number][60]** Price accuracy\n\n### setVolumePrecision\n\nSet the volume accuracy\n\n#### Parameters\n\n*   `volumePrecision` **[number][60]** Volume accuracy\n\n### addTheme\n\nAdd a theme to the chart,\nif no current theme is set, make this the current one.\n\n#### Parameters\n\n*   `theme` **[object][55]** Volume accuracy\n\nReturns **instance** theme instance\n\n### setTheme\n\nSet the chart theme\n\n#### Parameters\n\n*   `ID` &#x20;\n*   `theme` **[string][56]** theme identifier\n\n### setStream\n\nspecify a chart stream\n\n#### Parameters\n\n*   `stream` **[object][55]**&#x20;\n\nReturns **instance**&#x20;\n\n### getRange\n\ninitialize range\n\n#### Parameters\n\n*   `start` **[number][60]** index (optional, default `0`)\n*   `end` **[number][60]** index (optional, default `0`)\n*   `config`   (optional, default `{}`)\n\n### setRange\n\nset start and end of range\n\n#### Parameters\n\n*   `start` **[number][60]** index (optional, default `0`)\n*   `end` **[number][60]** index (optional, default `this.rangeLimit`)\n\n### mergeData\n\nMerge a block of data into the chart state.\nUsed for populating a chart with back history.\nMerge data must be formatted to a Chart State.\nOptionally set a new range upon merge.\n\n#### Parameters\n\n*   `merge` **[object][55]** merge data must be formatted to a Chart State\n*   `newRange` **([boolean][59] | [object][55])** false | {start: number, end: number} (optional, default `false`)\n*   `calc`   (optional, default `true`)\n\n### resize\n\nResize the chart\n\n#### Parameters\n\n*   `width` **[number][60]** pixels\n*   `height` **[number][60]** pixels\n\nReturns **[boolean][59]** success or failure\n\n### refresh\n\nrefresh / redraw the chart\n\n[1]: #tradexchart\n\n[2]: #start\n\n[3]: #parameters\n\n[4]: #on\n\n[5]: #parameters-1\n\n[6]: #off\n\n[7]: #parameters-2\n\n[8]: #emit\n\n[9]: #parameters-3\n\n[10]: #execute\n\n[11]: #parameters-4\n\n[12]: #delayedsetrange\n\n[13]: #updaterange\n\n[14]: #parameters-5\n\n[15]: #isindicator\n\n[16]: #parameters-6\n\n[17]: #setindicators\n\n[18]: #parameters-7\n\n[19]: #addindicator\n\n[20]: #parameters-8\n\n[21]: #getindicator\n\n[22]: #parameters-9\n\n[23]: #removeindicator\n\n[24]: #parameters-10\n\n[25]: #indicatorsettings\n\n[26]: #parameters-11\n\n[27]: #hasstateindicator\n\n[28]: #parameters-12\n\n[29]: #create\n\n[30]: #parameters-13\n\n[31]: #destroy\n\n[32]: #parameters-14\n\n[33]: #destroy-1\n\n[34]: #setdimensions\n\n[35]: #parameters-15\n\n[36]: #setpriceprecision\n\n[37]: #parameters-16\n\n[38]: #setvolumeprecision\n\n[39]: #parameters-17\n\n[40]: #addtheme\n\n[41]: #parameters-18\n\n[42]: #settheme\n\n[43]: #parameters-19\n\n[44]: #setstream\n\n[45]: #parameters-20\n\n[46]: #getrange\n\n[47]: #parameters-21\n\n[48]: #setrange\n\n[49]: #parameters-22\n\n[50]: #mergedata\n\n[51]: #parameters-23\n\n[52]: #resize\n\n[53]: #parameters-24\n\n[54]: #refresh\n\n[55]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\n\n[56]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\n\n[57]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function\n\n[58]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array\n\n[59]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean\n\n[60]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"table-of-contents","text":"Table of Contents"},{"depth":2,"slug":"tradexchart","text":"TradeXchart"},{"depth":3,"slug":"start","text":"start"},{"depth":4,"slug":"parameters","text":"Parameters"},{"depth":3,"slug":"on","text":"on"},{"depth":4,"slug":"parameters-1","text":"Parameters"},{"depth":3,"slug":"off","text":"off"},{"depth":4,"slug":"parameters-2","text":"Parameters"},{"depth":3,"slug":"emit","text":"emit"},{"depth":4,"slug":"parameters-3","text":"Parameters"},{"depth":3,"slug":"execute","text":"execute"},{"depth":4,"slug":"parameters-4","text":"Parameters"},{"depth":3,"slug":"delayedsetrange","text":"delayedSetRange"},{"depth":3,"slug":"updaterange","text":"updateRange"},{"depth":4,"slug":"parameters-5","text":"Parameters"},{"depth":3,"slug":"isindicator","text":"isIndicator"},{"depth":4,"slug":"parameters-6","text":"Parameters"},{"depth":3,"slug":"setindicators","text":"setIndicators"},{"depth":4,"slug":"parameters-7","text":"Parameters"},{"depth":3,"slug":"addindicator","text":"addIndicator"},{"depth":4,"slug":"parameters-8","text":"Parameters"},{"depth":3,"slug":"getindicator","text":"getIndicator"},{"depth":4,"slug":"parameters-9","text":"Parameters"},{"depth":3,"slug":"removeindicator","text":"removeIndicator"},{"depth":4,"slug":"parameters-10","text":"Parameters"},{"depth":3,"slug":"indicatorsettings","text":"indicatorSettings"},{"depth":4,"slug":"parameters-11","text":"Parameters"},{"depth":3,"slug":"hasstateindicator","text":"hasStateIndicator"},{"depth":4,"slug":"parameters-12","text":"Parameters"},{"depth":3,"slug":"create","text":"create"},{"depth":4,"slug":"parameters-13","text":"Parameters"},{"depth":3,"slug":"destroy","text":"destroy"},{"depth":4,"slug":"parameters-14","text":"Parameters"},{"depth":3,"slug":"destroy-1","text":"destroy"},{"depth":3,"slug":"setdimensions","text":"setDimensions"},{"depth":4,"slug":"parameters-15","text":"Parameters"},{"depth":3,"slug":"setpriceprecision","text":"setPricePrecision"},{"depth":4,"slug":"parameters-16","text":"Parameters"},{"depth":3,"slug":"setvolumeprecision","text":"setVolumePrecision"},{"depth":4,"slug":"parameters-17","text":"Parameters"},{"depth":3,"slug":"addtheme","text":"addTheme"},{"depth":4,"slug":"parameters-18","text":"Parameters"},{"depth":3,"slug":"settheme","text":"setTheme"},{"depth":4,"slug":"parameters-19","text":"Parameters"},{"depth":3,"slug":"setstream","text":"setStream"},{"depth":4,"slug":"parameters-20","text":"Parameters"},{"depth":3,"slug":"getrange","text":"getRange"},{"depth":4,"slug":"parameters-21","text":"Parameters"},{"depth":3,"slug":"setrange","text":"setRange"},{"depth":4,"slug":"parameters-22","text":"Parameters"},{"depth":3,"slug":"mergedata","text":"mergeData"},{"depth":4,"slug":"parameters-23","text":"Parameters"},{"depth":3,"slug":"resize","text":"resize"},{"depth":4,"slug":"parameters-24","text":"Parameters"},{"depth":3,"slug":"refresh","text":"refresh"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
