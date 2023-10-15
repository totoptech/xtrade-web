const id = "documentation.mdx";
						const collection = "docs";
						const slug = "documentation";
						const body = "\nimport { Card, CardGrid } from '@astrojs/starlight/components';\n\n## Next steps\n\n<CardGrid>\n  <Card title=\"Update content\" icon=\"pencil\">\n    Edit `src/content/docs/index.mdx` to see this page change.\n  </Card>\n  <Card title=\"Add new content\" icon=\"add-document\">\n    Add Markdown or MDX files to `src/content/docs` to create new pages.\n  </Card>\n  <Card title=\"Configure your site\" icon=\"setting\">\n    Edit your `sidebar` and other config in `astro.config.mjs`.\n  </Card>\n  <Card title=\"Read the docs\" icon=\"open-book\">\n    Learn more in [the Starlight Docs](https://starlight.astro.build/).\n  </Card>\n</CardGrid>\n\n\n# Contents\n\n* [Architecture](architecture.md)\n* [API Documentation](https://tradex-app.github.io/TradeX-chart/api/) (not currently up to date!)\n* [API Examples](api-examples.md)\n* [Configuration](configuration.md)\n* [Chart State](state.md)\n* [Events](events.md)\n* [Streaming Price Data](streaming-price-data.md)\n* [Indicators](indicators.md)\n* [Overlays](overlays.md)\n* [Themes](themes.md)\n* [Development Road Map](TradeX-chart-Development-Roadmap.pdf)\n\n";
						const data = {title:"TradeX Chart",description:"Get started building your charts with TradeX.",editUrl:true,head:[],template:"splash",hero:{tagline:"Get started building your charts with TradeX!",image:{alt:"",file:{src:"/TradeX-chart/_astro/tx.82979636.svg",width:48,height:48,format:"svg",orientation:void 0}},actions:[{text:"Example Guide",link:"/guides/example/",variant:"primary",icon:{type:"icon",name:"right-arrow"}},{text:"Read the Starlight docs",link:"https://starlight.astro.build",variant:"minimal",icon:{type:"icon",name:"external"}}]}};
						const _internal = {
							type: 'content',
							filePath: "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/src/content/docs/documentation.mdx",
							rawData: "\ntitle: TradeX Chart\ndescription: Get started building your charts with TradeX.\ntemplate: splash\nhero:\n  tagline: Get started building your charts with TradeX!\n  image:\n    file: ../../assets/tx.svg\n  actions:\n    - text: Example Guide\n      link: /guides/example/\n      icon: right-arrow\n      variant: primary\n    - text: Read the Starlight docs\n      link: https://starlight.astro.build\n      icon: external",
						};

export { _internal, body, collection, data, id, slug };
