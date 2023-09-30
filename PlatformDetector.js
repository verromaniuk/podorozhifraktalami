// PlatformDetector.js

function detectPlatform() {
    var userAgent = navigator.userAgent;

    if (userAgent.match(/Macintosh|MacIntel|MacPPC|Mac68K|Windows|Linux/i)) {
        // This is a PC (including Macintosh and different PC operating systems)
        unityInstance.SendMessage("MobileControlsManager", "ReceivePlatform", "PC");
    } else if (userAgent.match(/iPhone|iPad|iPod|Android/i)) {
        // This is a Mobile device (including iOS and Android)
        unityInstance.SendMessage("MobileControlsManager", "ReceivePlatform", "Mobile");
    } else {
        // Default platform (e.g., other devices), adjust as needed
        unityInstance.SendMessage("MobileControlsManager", "ReceivePlatform", "Default");
    }
}
