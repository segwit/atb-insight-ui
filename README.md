# ATB Insight UI

A ATBcoin blockchain explorer web application service for [ATBcore Node](https://github.com/segwit/atbcore-node) using the [ATB Insight API](https://github.com/segwit/atb-insight-api).

## Getting Started 

To manually install all of the necessary components, you can run these commands:

Global install:

```bash
npm install -g atbcore-node
atbcore-node create mynode
cd mynode
atbcore-node install atb-insight-api
atbcore-node install atb-insight-ui
```

Set path to `atbcoind` [ATBcoin insight blockchain](https://github.com/segwit/atbcoin) for `atbcore-node.json` in a `exec` field

Start node:

```bash
atbcore-node start
```

Open a web browser to `http://localhost:3001/insight/`

Local install:
```bash
npm install atbcore-node
$(npm bin)/atbcore-node create mynode
cd mynode
$(npm bin)/atbcore-node install atb-insight-api
$(npm bin)/atbcore-node install atb-insight-ui
```

Set path to `atbcoind` [ATBcoin insight](https://github.com/segwit/atbcoin) for `atbcore-node.json` in a `exec` field

Start node:

```bash
$(npm bin)/atbcore-node start
```

Open a web browser to `http://localhost:3001/insight/`

**Note:** You can use an existing ATBcoin data directory, however `txindex`, `addressindex`, `timestampindex` and `spentindex` needs to be set to true in `atbcoin.conf`, as well as a few other additional fields.

Example `atbcoin.conf`:
```
server=1
whitelist=127.0.0.1
txindex=1
addressindex=1
timestampindex=1
spentindex=1
zmqpubrawtx=tcp://127.0.0.1:28332
zmqpubhashblock=tcp://127.0.0.1:28332
rpcallowip=127.0.0.1
rpcuser=atbusername
rpcpassword=myatbcoinpassword
rpcport=18332
reindex=1
gen=0
addrindex=1
```


## Development

To build Insight UI locally:

```
$ npm run build
```

A watch task is also available:

```
$ npm run watch
```

## Changing routePrefix and apiPrefix

By default, the `insightConfig` in `package.json` is:

```json
  "insightConfig": {
    "apiPrefix": "atb-insight-api",
    "routePrefix": "insight"
  }
```

To change these routes, first make your changes to `package.json`, for example:

```json
  "insightConfig": {
    "apiPrefix": "api",
    "routePrefix": ""
  }
```

Then rebuild the `atb-insight-ui` service:

```
$ npm run build
```

## Multilanguage support

Insight UI uses [angular-gettext](http://angular-gettext.rocketeer.be) for multilanguage support.

To enable a text to be translated, add the ***translate*** directive to html tags. See more details [here](http://angular-gettext.rocketeer.be/dev-guide/annotate/). Then, run:

```
grunt compile
```

This action will create a template.pot file in ***po/*** folder. You can open it with some PO editor ([Poedit](http://poedit.net)). Read this [guide](http://angular-gettext.rocketeer.be/dev-guide/translate/) to learn how to edit/update/import PO files from a generated POT file. PO file will be generated inside po/ folder.

If you make new changes, simply run **grunt compile** again to generate a new .pot template and the angular javascript ***js/translations.js***. Then (if use Poedit), open .po file and choose ***update from POT File*** from **Catalog** menu.

Finally changes your default language from ***public/src/js/config***

```
gettextCatalog.currentLanguage = 'es';
```

This line will take a look at any *.po files inside ***po/*** folder, e.g.
**po/es.po**, **po/nl.po**. After any change do not forget to run ***grunt
compile***.


## Note

For more details about the [ATB Insight API](https://github.com/segwit/atb-insight-api) configuration and end-points, go to [Insight API GitHub repository](https://github.com/segwit/atb-insight-api).

## Contribute

Contributions and suggestions are welcomed at the [ATB Insight UI GitHub repository](https://github.com/segwit/atb-insight-ui).


## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
