"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Feature = (function () {
    function Feature(FeatureID, AppID, Description, FeatFunction, ScreenshotPath) {
        this.FeatureID = FeatureID;
        this.AppID = AppID;
        this.Description = Description;
        this.FeatFunction = FeatFunction;
        this.ScreenshotPath = ScreenshotPath;
    }
    return Feature;
}());
exports.Feature = Feature;
