import Config from 'react-native-config';

export const ENV = Config.ENV;

const isProduction = ENV === 'production';

export const API_URL = isProduction ? Config.PROD_API_URL : Config.STAGING_API_URL;
