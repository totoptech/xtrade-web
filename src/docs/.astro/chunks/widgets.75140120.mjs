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

				const html = updateImageReferences("<p>TradeX Chart has a number of widgets, but only a select number are exposed to the developer to make use of. The others are used by default with certain chart components.</p>\n<p>Widgets accessible via the API:</p>\n<ul>\n<li>Config Dialogue</li>\n<li><a href=\"#dialogue\">Dialogue</a></li>\n<li>Progress</li>\n<li>Window</li>\n</ul>\n<p>Widgets are not <a href=\"../overlays\">chart overlays</a>. They are their own special component type that float above all of the other chart components.</p>\n<p>Widgets iterates through the registered widget classes and adding the ones required immediately. eg. Chart pane divider</p>\n<p>Those widgets not immediately required, such as Dialogue, can be added later via the API.</p>\n<h1 id=\"config-dialogue-window\">Config, Dialogue, Window</h1>\n<p><a href=\"#Window\">Window class</a> <code>./src/components/widgets/window.js</code> is the parent for Dialogue and Config.</p>\n<p><a href=\"#Dialogue\">Dialogue</a> (modal) <code>./src/components/widgets/dialogue.js</code> extends Window. It provides an optional title bar, drag bar, close icon.</p>\n<p><a href=\"#Config\">Config Dialogues</a> <code>./src/components/widgets/configDialouge.js</code> then further extend the Dialogue class (to be implemented), by offering special content formatting and positioning for form elements.</p>\n<h2 id=\"window\">Window</h2>\n<p>Window provides a basic floating box with Event Listener that will close the it if you click anywhere outside of it. (TODO: close on key stroke) Windows accept HTML content. Windows will automatically reposition if a chart resize crops or hides them.</p>\n<p>TODO: Window API documentation</p>\n<h2 id=\"dialogue\">Dialogue</h2>\n<p>A dialogue in essence is floating box layer which presents information over the chart content. By default, the dialogue will also inherit the click outside of behavior from Window that closes it.</p>\n<p>Dialogues have the following configurable properties with some being optional.</p>\n<h3 id=\"dialogue-config\">Dialogue Config</h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Name</th><th>Type</th><th align=\"left\">Required</th><th>Description</th></tr></thead><tbody><tr><td align=\"left\">dragBar</td><td>boolean</td><td align=\"left\">no</td><td>Enables the user to click and drag the dialogue, positioning it where they see fit</td></tr><tr><td align=\"left\">closeIcon</td><td>boolean</td><td align=\"left\">no</td><td>Close / remove the dialogue from the chart</td></tr><tr><td align=\"left\">title</td><td>string</td><td align=\"left\">no</td><td>Title displayed the top of the dialoge</td></tr><tr><td align=\"left\">content</td><td>string</td><td align=\"left\">yes</td><td>Without HTML content, a dialogue is pointless so it is required that you provide some. =)</td></tr><tr><td align=\"left\">dimensions</td><td>Object</td><td align=\"left\">yes</td><td>{w, h} object specifying width and height in pixels</td></tr><tr><td align=\"left\">position</td><td>Object</td><td align=\"left\">yes</td><td><code>{x, y, z}</code> object specifying position in pixels</td></tr><tr><td align=\"left\">styles</td><td>Object</td><td align=\"left\">no</td><td><code>{window, dragBar, closeIcon, title, content}</code> object of <a href=\"#dialogue-styling\">styleable dialogue features</a></td></tr></tbody></table>\n<p>If no <code>position</code> is specified, then the dialogue will default to positioning in the center of the chart.</p>\n<h3 id=\"initialize-and-start-dialogue\">Initialize and Start Dialogue</h3>\n<p>The dialogue can be initialized with a config before it is displayed</p>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #6B737C\">// instantiate and start dialogue</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">config</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #B392F0\"> {dragBar</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> closeIcon</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> title</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> content</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> position</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> styles}</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">dialogue</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">chart</span><span style=\"color: #B392F0\">.</span><span style=\"color: #79B8FF\">WidgetsG</span><span style=\"color: #B392F0\">.insert(</span><span style=\"color: #FFAB70\">\"Dialogue\"</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> config)</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">      </span><span style=\"color: #79B8FF\">dialogue</span><span style=\"color: #B392F0\">.start()</span></span></code></pre>\n<h3 id=\"display-dialogue\">Display Dialogue</h3>\n<p>Calling <code>dialogue.open()</code> will display the pre-configured dialogue. However you can optionally pass a new configuration to the dialogue when it opens to change or update it’s content.</p>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">config</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #B392F0\"> {title</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> content</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> position</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> styles}</span></span>\n<span class=\"line\"><span style=\"color: #6B737C\">// display dialogue</span></span>\n<span class=\"line\"><span style=\"color: #79B8FF\">dialogue</span><span style=\"color: #B392F0\">.open(config)</span></span></code></pre>\n<h3 id=\"hide-dialogue\">Hide Dialogue</h3>\n<p><code>dialogue.close()</code> will cause the dialogue to be hidden from display.</p>\n<h3 id=\"remove\">Remove</h3>\n<p><code>dialogue.remove()</code> will remove the dialogue from the chart, rendering it no longer accessible.</p>\n<h3 id=\"dialogue-styling\">Dialogue Styling</h3>\n<p>There are five elements of the dialogue that can be styled.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Name</th><th>Description</th></tr></thead><tbody><tr><td align=\"left\">window</td><td>parent element hostng the others</td></tr><tr><td align=\"left\">dragBar</td><td>optional bar at the top to allow manual positioning</td></tr><tr><td align=\"left\">closeIcon</td><td>optional close icon</td></tr><tr><td align=\"left\">title</td><td>optional title</td></tr><tr><td align=\"left\">content</td><td>what you want to display</td></tr></tbody></table>\n<p>Each entry of the <code>styles</code> property is an object containing CSS properties and values.</p>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">config</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #B392F0\"> {</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  dragBar</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  dimensions</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> {w</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F8F8F8\">199</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> y</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F8F8F8\">100</span><span style=\"color: #B392F0\">}</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  position: {x</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F8F8F8\">100</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> y</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F8F8F8\">100</span><span style=\"color: #B392F0\">}</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  styles</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> {</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">    dragBar</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> { background</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"#888\"</span><span style=\"color: #B392F0\"> }</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">    title: { color</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"#ccc\"</span><span style=\"color: #B392F0\"> }</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  }</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">}</span></span></code></pre>\n<h1 id=\"config-dialogue\">Config Dialogue</h1>\n<p><strong>TO BE IMPLEMENTED</strong></p>\n<p>Building upon the ancestor classes of Window and Dialogue, Config offers special formatting and content handling, specifically for forms.</p>\n<p>The class allows for overriding the default handling of the form via a custom callback.</p>\n<p>Config events can also be subscribed for further customization of the Config behaviour.</p>");

				const frontmatter = {"title":"Widgets","description":"How to use TradeX Chart widgets"};
				const file = "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/src/content/docs/reference/widgets.md";
				const url = undefined;
				function rawContent() {
					return "TradeX Chart has a number of widgets, but only a select number are exposed to the developer to make use of. The others are used by default with certain chart components.\n\nWidgets accessible via the API:\n\n* Config Dialogue\n* [Dialogue](#dialogue)\n* Progress\n* Window\n\nWidgets are not [chart overlays](../overlays). They are their own special component type that float above all of the other chart components.\n\nWidgets iterates through the registered widget classes and adding the ones required immediately. eg. Chart pane divider\n\nThose widgets not immediately required, such as Dialogue, can be added later via the API.\n\n# Config, Dialogue, Window\n\n[Window class](#Window) `./src/components/widgets/window.js` is the parent for Dialogue and Config.\n\n[Dialogue](#Dialogue) (modal) `./src/components/widgets/dialogue.js` extends Window. It provides an optional title bar, drag bar, close icon.\n\n[Config Dialogues](#Config) `./src/components/widgets/configDialouge.js` then further extend the Dialogue class (to be implemented), by offering special content formatting and positioning for form elements.\n\n## Window\n\nWindow provides a basic floating box with Event Listener that will close the it if you click anywhere outside of it. (TODO: close on key stroke) Windows accept HTML content. Windows will automatically reposition if a chart resize crops or hides them.\n\nTODO: Window API documentation\n\n## Dialogue\n\nA dialogue in essence is floating box layer which presents information over the chart content. By default, the dialogue will also inherit the click outside of behavior from Window that closes it.\n\nDialogues have the following configurable properties with some being optional.\n\n### Dialogue Config\n\n\n| Name       | Type    | Required | Description                                                                                                 |\n| :----------- | --------- | :--------- | ------------------------------------------------------------------------------------------------------------- |\n| dragBar    | boolean | no       | Enables the user to click and drag the dialogue, positioning it where they see fit                          |\n| closeIcon  | boolean | no       | Close / remove the dialogue from the chart                                                                  |\n| title      | string  | no       | Title displayed the top of the dialoge                                                                      |\n| content    | string  | yes      | Without HTML content, a dialogue is pointless so it is required that you provide some. =)                   |\n| dimensions | Object  | yes      | {w, h} object specifying width and height in pixels                                                         |\n| position   | Object  | yes      | ``{x, y, z}`` object specifying position in pixels                                                          |\n| styles     | Object  | no       | ``{window, dragBar, closeIcon, title, content}`` object of [styleable dialogue features](#dialogue-styling) |\n\nIf no ``position`` is specified, then the dialogue will default to positioning in the center of the chart.\n\n### Initialize and Start Dialogue\n\nThe dialogue can be initialized with a config before it is displayed\n\n```javascript\n// instantiate and start dialogue\nconst config = {dragBar, closeIcon, title, content, position, styles}\nconst dialogue = chart.WidgetsG.insert(\"Dialogue\", config)\n      dialogue.start()\n```\n\n### Display Dialogue\n\nCalling ``dialogue.open()`` will display the pre-configured dialogue. However you can optionally pass a new configuration to the dialogue when it opens to change or update it's content.\n\n```javascript\nconst config = {title, content, position, styles}\n// display dialogue\ndialogue.open(config)\n```\n\n### Hide Dialogue\n\n``dialogue.close()`` will cause the dialogue to be hidden from display.\n\n### Remove\n\n``dialogue.remove()`` will remove the dialogue from the chart, rendering it no longer accessible.\n\n### Dialogue Styling\n\nThere are five elements of the dialogue that can be styled.\n\n\n| Name      | Description                                         |\n| :---------- | ----------------------------------------------------- |\n| window    | parent element hostng the others                    |\n| dragBar   | optional bar at the top to allow manual positioning |\n| closeIcon | optional close icon                                 |\n| title     | optional title                                      |\n| content   | what you want to display                            |\n\nEach entry of the ``styles`` property is an object containing CSS properties and values.\n\n```javascript\nconst config = {\n  dragBar: true,\n  dimensions: {w: 199, y: 100}\n  position: {x: 100, y: 100},\n  styles: {\n    dragBar: { background: \"#888\" }\n    title: { color: \"#ccc\" }\n  }\n}\n```\n\n# Config Dialogue\n\n**TO BE IMPLEMENTED**\n\nBuilding upon the ancestor classes of Window and Dialogue, Config offers special formatting and content handling, specifically for forms.\n\nThe class allows for overriding the default handling of the form via a custom callback.\n\nConfig events can also be subscribed for further customization of the Config behaviour.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"config-dialogue-window","text":"Config, Dialogue, Window"},{"depth":2,"slug":"window","text":"Window"},{"depth":2,"slug":"dialogue","text":"Dialogue"},{"depth":3,"slug":"dialogue-config","text":"Dialogue Config"},{"depth":3,"slug":"initialize-and-start-dialogue","text":"Initialize and Start Dialogue"},{"depth":3,"slug":"display-dialogue","text":"Display Dialogue"},{"depth":3,"slug":"hide-dialogue","text":"Hide Dialogue"},{"depth":3,"slug":"remove","text":"Remove"},{"depth":3,"slug":"dialogue-styling","text":"Dialogue Styling"},{"depth":1,"slug":"config-dialogue","text":"Config Dialogue"}];
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
