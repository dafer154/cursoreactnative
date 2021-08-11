const { createNavigationContainerRef } = require('@react-navigation/native');

export const navigationRef = createNavigationContainerRef();

export function goToScreen(name: string, params: object = {}) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
