cordova.define("cordova-camscanner.CordovaCamscanner", function(require, exports, module) {
module.exports = {
  scan : function(srcUri, successCallback, failureCallback) {
    cordova.exec(successCallback, failureCallback, "CordovaCamscanner", "scan", [srcUri]);
  }
}

});
