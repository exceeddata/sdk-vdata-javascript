## Introduction
This repository contains samples for EXD vData SDK for Javascript package (exceeddata-sdk-vdata).  vData is an edge database running on vehicles' domain controllers.  It stores signal data in a high-compression file format with the extension of .vsw.  EXD vData SDK offers vsw decoding capabilities in standard programming languages such as C++, [Java](https://github.com/exceeddata/sdk-vdata-java), [Python](https://github.com/exceeddata/sdk-vdata-python), [Javascript](https://github.com/exceeddata/sdk-vdata-javascript), and etc.  

The following sections demonstrates how to install and use the SDK.

## Table of Contents
- [System Requirement](#system-requirement)
- [Additional Dependencies](#additional-dependencies)
- [License](#license)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Sample Usage](#sample-usage)
- [Complete Examples](#complete-examples)
  - [Full VSW Decode App](#full-vsw-decode-app)
  - [Convert VSW to ASC Format](#convert-vsw-to-asc-format)
  - [Convert VSW to BLF Format](#convert-vsw-to-blf-format)
- [Getting Help](#getting-help)
- [Contributing to EXD](#contributing-to-exd)

## System Requirement
- Node.js (if installed via npm)

## Additional Dependencies
The following dependencies will be installed by the SDK if not already exists.
- pako
- fzstd

## License
The codes in the repository are released with [MIT License](LICENSE).
- Thirdparty library licenses are included [here](licenses/)

## Installation
Binary installers for the latest released version are available at the NPM public registry and may be installed using npm install command.  Pure javascript is available upon request.

```sh
npm install exceeddata-sdk-vdata 

....

```

**Post Installation**

```sh
....

```

## API Documentation
Publicly available SDK classes and methods are at [API Documentation](https://htmlpreview.github.io/?https://github.com/exceeddata/sdk-vdata-javascript/blob/main/doc/index.html).  [Backup Link ](https://exdfiles.cn-sh2.ufileos.com/vdata_sdk/docs/js/index.html)

**Import**
To use the SDK import "exceeddata.sdk.vdata" package and the following classes:
- VDataReaderFactory: in most cases VDataReaderFactory is all you ever need
- VDataByteReader: use VDataByteReader if you have a vsw byte arrays and need to wrap in a data reader to VDataReaderFactory
- VDataMeta: the metadata information of the vsw file
- VDataFrame: the data frame of the vsw data contents

## Sample Usage
SDK is very easy to use, in most cases 7 lines of code is sufficient.

```js

let uint8arry = new VDataByteReader(new Uint8Array(....));
let factory = new VDataReaderFactory();
factory.setDataReaders(uint8arry);
factory.setSignals(signals);
        
let reader = factory.open();
let frame = reader.df();
let vals = frame.objects();  // n x m array of rows and columns of data
let cols = frame.cols(true); // column names

```


## Complete Examples
### NodeJS Example
- [Nodejs Example](nodejs): A simple demo application to decode the VSW file with a unit test case. 
```
%cd nodejs
%npm install 
% yarn test 
yarn run v1.22.22
$ jest
  console.log
    file format verion: 26

      at VDataDecoder.initialize (node_modules/vdatashj/lib/index.js:20:72004)

  console.log
    file bucket count: 1

      at VDataDecoder.initialize (node_modules/vdatashj/lib/index.js:20:72054)

  console.log
    file query start time: 0

      at VDataDecoder.initialize (node_modules/vdatashj/lib/index.js:20:72123)

  console.log
    file query end time: 0

      at VDataDecoder.initialize (node_modules/vdatashj/lib/index.js:20:72190)

  console.log
    Add bucket [object {cycle=0, start=1010, end=1990, living=0, notime=0}]

      at Function.sortAllBucketForSingleQueueMode (node_modules/vdatashj/lib/index.js:20:80469)

  console.log
    Add decoder [object {start=1010, end=1990, buckets=1, keys=3}]

      at Function.sortAddDecoder (node_modules/vdatashj/lib/index.js:20:21272)

  console.log
    Add bucket [object {cycle=0, start=1010, end=1990, living=0, notime=0}]

      at Function.sortAllBucketForSingleQueueMode (node_modules/vdatashj/lib/index.js:20:80469)

  console.log
    [ 'time', 'Signal_10Hz', 'Signal_100Hz', 'Signal_20Hz' ]

      at Object.log [as vswdecode] (vdata.js:11:16)

 PASS  test/vdata.test.js
  ✓ simple decode test (21 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.21 s
Ran all test suites.
✨  Done in 0.83s.

```


### PureJS Example
- [vswdecode.html](src/purejs/vswdecode.html): a demo page to demonstrate how to decode vsw from an uploaded file. [Preview Online ](https://exdfiles.cn-sh2.ufileos.com/vdata_sdk/js_demo/vswdecode.html)
- vsw2blf, vsw2asc is not opensource in javascript. It will be provided in EXCEEDDATA commercial solutions.

## Getting Help
For usage questions, the best place to go to is [Github issues](https://github.com/exceeddata/sdk-vdata-javascript/issues). For customers of EXCEEDDATA commercial solutions, you can contact [support](mailto:support@smartsct.com) for questions or support.

## Contributing to EXD
All contributions, bug reports, bug fixes, documentation improvements, code enhancements, and new ideas are welcome.

<hr>

[Go to Top](#table-of-contents)
