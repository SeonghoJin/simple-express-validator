import {get as $26Zo0$get} from "lodash";

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
var $b774052d6f35b2c4$exports = {};
var $2c515f26a0b06625$exports = {};

$parcel$export($2c515f26a0b06625$exports, "getBody", () => $2c515f26a0b06625$export$135b49d4bc2964c6);
const $4085b04aa4539f50$export$a2b2d8b55704c18e = (path, property, message)=>{
    return `${path}(${property}), ${message}`;
};


const $2c515f26a0b06625$export$135b49d4bc2964c6 = (req)=>{
    const body = req.body;
    if (body === null || body === undefined) throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e('body', body, 'this is null or undefined'));
    return body;
};


var $5edabfec653ec9dc$exports = {};

$parcel$export($5edabfec653ec9dc$exports, "getBoolean", () => $5edabfec653ec9dc$export$11811c4d2c6a473d);
var $7a01227ec68604c5$exports = {};
var $4cc846da24e3c528$exports = {};

$parcel$export($4cc846da24e3c528$exports, "getProperty", () => $4cc846da24e3c528$export$63ef76b19cf4a753);

const $4cc846da24e3c528$export$63ef76b19cf4a753 = $26Zo0$get;


$parcel$exportWildcard($7a01227ec68604c5$exports, $4cc846da24e3c528$exports);




const $5edabfec653ec9dc$export$11811c4d2c6a473d = (req, path, option)=>{
    const body = $2c515f26a0b06625$export$135b49d4bc2964c6(req);
    const property = $4cc846da24e3c528$export$63ef76b19cf4a753(body, path);
    let convertedProperty = property;
    if (property === null || property === undefined) throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is null or undefined'));
    if (typeof property === 'string') {
        const lowercaseProperty = property.toLowerCase();
        if (lowercaseProperty !== 'true' && lowercaseProperty !== 'false' && lowercaseProperty !== '0' && lowercaseProperty !== '1') throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is not boolean'));
        else convertedProperty = lowercaseProperty === 'true' || lowercaseProperty === '1';
        return option?.pipe ? convertedProperty : property;
    }
    if (typeof property === 'number') {
        if (property !== 1 && property !== 0) throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is not boolean'));
        else convertedProperty = property === 1;
        return option?.pipe ? convertedProperty : property;
    }
    if (typeof property !== 'boolean') throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is not boolean'));
    return option?.pipe ? convertedProperty : property;
};


var $242289bf10438d8a$exports = {};

$parcel$export($242289bf10438d8a$exports, "getNotEmptyString", () => $242289bf10438d8a$export$29251ee096015f3a);

var $120d2c0841f24f9d$exports = {};

$parcel$export($120d2c0841f24f9d$exports, "getString", () => $120d2c0841f24f9d$export$f8963f3214707ee4);



const $120d2c0841f24f9d$export$f8963f3214707ee4 = (req, path)=>{
    const body = $2c515f26a0b06625$export$135b49d4bc2964c6(req);
    const property = $4cc846da24e3c528$export$63ef76b19cf4a753(body, path);
    if (typeof property !== 'string') throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is not string'));
    return property;
};


const $242289bf10438d8a$export$29251ee096015f3a = (req, path, option)=>{
    const property = $120d2c0841f24f9d$export$f8963f3214707ee4(req, path);
    const validProp = option?.ignoreWhiteSpace ? property.trim() : property;
    if (validProp === '') throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is empty string'));
    return property;
};


var $4494cb75f82722eb$exports = {};

$parcel$export($4494cb75f82722eb$exports, "getNumber", () => $4494cb75f82722eb$export$b14f2714108df84);



const $4494cb75f82722eb$export$b14f2714108df84 = (req, path, option)=>{
    const body = $2c515f26a0b06625$export$135b49d4bc2964c6(req);
    const property = $4cc846da24e3c528$export$63ef76b19cf4a753(body, path);
    const convertedProperty = Number(property);
    if (property === null || property === undefined) throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is null or undefined'));
    if (Number.isNaN(convertedProperty)) throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is Nan'));
    if (typeof convertedProperty !== 'number') throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is not number'));
    return option?.pipe ? convertedProperty : property;
};


var $c63f67f7472aa9ab$exports = {};

$parcel$export($c63f67f7472aa9ab$exports, "getObject", () => $c63f67f7472aa9ab$export$93534728ecb2e7b9);



const $c63f67f7472aa9ab$export$93534728ecb2e7b9 = (req, path)=>{
    const body = $2c515f26a0b06625$export$135b49d4bc2964c6(req);
    const property = $4cc846da24e3c528$export$63ef76b19cf4a753(body, path);
    if (property === null || property === undefined) throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is null or undefined'));
    if (typeof property !== 'object') throw new TypeError($4085b04aa4539f50$export$a2b2d8b55704c18e(path, property, 'this is not object'));
    return property;
};



$parcel$exportWildcard($b774052d6f35b2c4$exports, $2c515f26a0b06625$exports);
$parcel$exportWildcard($b774052d6f35b2c4$exports, $5edabfec653ec9dc$exports);
$parcel$exportWildcard($b774052d6f35b2c4$exports, $242289bf10438d8a$exports);
$parcel$exportWildcard($b774052d6f35b2c4$exports, $4494cb75f82722eb$exports);
$parcel$exportWildcard($b774052d6f35b2c4$exports, $c63f67f7472aa9ab$exports);
$parcel$exportWildcard($b774052d6f35b2c4$exports, $120d2c0841f24f9d$exports);



var $77503970b015f24f$exports = {};
var $3d481e2dfdd8af02$exports = {};


$parcel$exportWildcard($77503970b015f24f$exports, $3d481e2dfdd8af02$exports);




export {$2c515f26a0b06625$export$135b49d4bc2964c6 as getBody, $5edabfec653ec9dc$export$11811c4d2c6a473d as getBoolean, $242289bf10438d8a$export$29251ee096015f3a as getNotEmptyString, $4494cb75f82722eb$export$b14f2714108df84 as getNumber, $c63f67f7472aa9ab$export$93534728ecb2e7b9 as getObject, $120d2c0841f24f9d$export$f8963f3214707ee4 as getString, $4cc846da24e3c528$export$63ef76b19cf4a753 as getProperty};
//# sourceMappingURL=index.js.map
