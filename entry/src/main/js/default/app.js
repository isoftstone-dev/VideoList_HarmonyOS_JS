import configuration from '@system.configuration';

export default {
    onCreate() {
        console.info('AceApplication onCreate');

        configuration.getLocale()
    },
    onDestroy() {
        console.info('AceApplication onDestroy');
    }
};
