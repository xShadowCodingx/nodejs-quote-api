// Server Settings utility class and methods

const fs = require('fs');

const serverSettingsData = fs.readFileSync('./configuration/ServerSettings.json');

class ServerSettings {
    static getSettings() {
        return JSON.parse(serverSettingsData);
    };

    static getServerName() {
        const settings = this.getSettings();
        return settings.servername || 'localhost';
    };

    static getPort() {
        const settings = this.getSettings();
        return settings.port || 3000;
    };

    static useKeys() {
        const settings = this.getSettings();
        return settings.usekeys || false;
    };

    static getActiveEndpoints() {
        const settings = this.getSettings();
        return settings.activeapiendpoints || [];
    }
};

module.exports = ServerSettings;