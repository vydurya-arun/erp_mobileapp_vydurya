import { Platform, useWindowDimensions } from 'react-native';

export const useResponsive = () => {
    const { width, height } = useWindowDimensions();

    const isLandscape = width > height;
    const isPortrait = !isLandscape;

    // Tablet detection logic
    // A common threshold for tablets is a width (or smallest dimension) of >= 768
    const smallestDimension = Math.min(width, height);
    const isTablet = smallestDimension >= 600; // Adjusted for broader tablet support including smaller ipads/large phones if desired, or stick to 768. 600 is a safe "large screen" bet.
    const isMobile = !isTablet;

    // Responsive values helper
    const hp = (percentage: number) => {
        return Math.round((percentage * height) / 100);
    };

    const wp = (percentage: number) => {
        return Math.round((percentage * width) / 100);
    };

    // Dynamic sizing based on device type
    const getResponsiveSize = (size: number) => {
        if (isTablet) {
            return size * 1.5; // Scale up for tablets
        }
        return size;
    };

    return {
        width,
        height,
        isLandscape,
        isPortrait,
        isTablet,
        isMobile,
        hp,
        wp,
        getResponsiveSize,
        isIOS: Platform.OS === 'ios',
        isAndroid: Platform.OS === 'android',
        isWeb: Platform.OS === 'web',
    };
};
