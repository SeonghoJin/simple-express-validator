var $dYZEH$lodash = require("lodash");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $0ccf94290cf7d8ae$exports = {};
var $1b330fc4a31302b3$exports = {};

$parcel$export($1b330fc4a31302b3$exports, "getBody", () => $1b330fc4a31302b3$export$135b49d4bc2964c6);
const $338ad06e3743cc9c$export$a2b2d8b55704c18e = (path, property, message)=>{
    return `${path}(${property}), ${message}`;
};


const $1b330fc4a31302b3$export$135b49d4bc2964c6 = (req)=>{
    const body = req.body;
    if (body === null || body === undefined) throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e('body', body, 'this is null or undefined'));
    return body;
};


var $a4f68edc5016991c$exports = {};

$parcel$export($a4f68edc5016991c$exports, "getBoolean", () => $a4f68edc5016991c$export$11811c4d2c6a473d);







const $a4f68edc5016991c$export$11811c4d2c6a473d = (req, path, option)=>{
    const body = $1b330fc4a31302b3$export$135b49d4bc2964c6(req);
    const property = $a76e12b8bf652b6d$re_export$getProperty(body, path);
    let convertedProperty = property;
    if (property === null || property === undefined) throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is null or undefined'));
    if (typeof property === 'string') {
        const lowercaseProperty = property.toLowerCase();
        if (lowercaseProperty !== 'true' && lowercaseProperty !== 'false' && lowercaseProperty !== '0' && lowercaseProperty !== '1') throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is not boolean'));
        else convertedProperty = lowercaseProperty === 'true' || lowercaseProperty === '1';
        return option?.pipe ? convertedProperty : property;
    }
    if (typeof property === 'number') {
        if (property !== 1 && property !== 0) throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is not boolean'));
        else convertedProperty = property === 1;
        return option?.pipe ? convertedProperty : property;
    }
    if (typeof property !== 'boolean') throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is not boolean'));
    return option?.pipe ? convertedProperty : property;
};


var $8555818d98d79511$exports = {};

$parcel$export($8555818d98d79511$exports, "getNotEmptyString", () => $8555818d98d79511$export$29251ee096015f3a);

var $9723518ee30f490d$exports = {};

$parcel$export($9723518ee30f490d$exports, "getString", () => $9723518ee30f490d$export$f8963f3214707ee4);



const $9723518ee30f490d$export$f8963f3214707ee4 = (req, path)=>{
    const body = $1b330fc4a31302b3$export$135b49d4bc2964c6(req);
    const property = $a76e12b8bf652b6d$re_export$getProperty(body, path);
    if (typeof property !== 'string') throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is not string'));
    return property;
};


const $8555818d98d79511$export$29251ee096015f3a = (req, path, option)=>{
    const property = $9723518ee30f490d$export$f8963f3214707ee4(req, path);
    const validProp = option?.ignoreWhiteSpace ? property.trim() : property;
    if (validProp === '') throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is empty string'));
    return property;
};


var $b5efddb5fd704bee$exports = {};

$parcel$export($b5efddb5fd704bee$exports, "getNumber", () => $b5efddb5fd704bee$export$b14f2714108df84);



const $b5efddb5fd704bee$export$b14f2714108df84 = (req, path, option)=>{
    const body = $1b330fc4a31302b3$export$135b49d4bc2964c6(req);
    const property = $a76e12b8bf652b6d$re_export$getProperty(body, path);
    const convertedProperty = Number(property);
    if (property === null || property === undefined) throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is null or undefined'));
    if (Number.isNaN(convertedProperty)) throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is Nan'));
    if (typeof convertedProperty !== 'number') throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is not number'));
    return option?.pipe ? convertedProperty : property;
};


var $8223c3bf57c45653$exports = {};

$parcel$export($8223c3bf57c45653$exports, "getObject", () => $8223c3bf57c45653$export$93534728ecb2e7b9);



const $8223c3bf57c45653$export$93534728ecb2e7b9 = (req, path)=>{
    const body = $1b330fc4a31302b3$export$135b49d4bc2964c6(req);
    const property = $a76e12b8bf652b6d$re_export$getProperty(body, path);
    if (property === null || property === undefined) throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is null or undefined'));
    if (typeof property !== 'object') throw new TypeError($338ad06e3743cc9c$export$a2b2d8b55704c18e(path, property, 'this is not object'));
    return property;
};



$parcel$exportWildcard($0ccf94290cf7d8ae$exports, $1b330fc4a31302b3$exports);
$parcel$exportWildcard($0ccf94290cf7d8ae$exports, $a4f68edc5016991c$exports);
$parcel$exportWildcard($0ccf94290cf7d8ae$exports, $8555818d98d79511$exports);
$parcel$exportWildcard($0ccf94290cf7d8ae$exports, $b5efddb5fd704bee$exports);
$parcel$exportWildcard($0ccf94290cf7d8ae$exports, $8223c3bf57c45653$exports);
$parcel$exportWildcard($0ccf94290cf7d8ae$exports, $9723518ee30f490d$exports);


$parcel$exportWildcard(module.exports, $0ccf94290cf7d8ae$exports);


//# sourceMappingURL=index.js.map
