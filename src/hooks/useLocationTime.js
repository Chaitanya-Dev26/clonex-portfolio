import { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

export const useLocationTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [visitorLocation, setVisitorLocation] = useState(null);
    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
    const timeRef = useRef(null);
    const locationRef = useRef(null);

    // Project client locations
    const projectClients = useMemo(() => [
        { name: 'MONTREAL', timezone: 'America/Montreal', project: 'CloneX Portfolio' }
    ], []);

    // Format time to HH:MM:SS
    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    // Detect visitor's timezone and location
    useEffect(() => {
        const detectVisitorLocation = async () => {
            try {
                console.log('🔍 Starting location detection...');

                // Try to get location info from IP first (this works with VPN)
                try {
                    const response = await fetch('https://ipapi.co/json/');
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const data = await response.json();
                    const ipBasedTimezone = data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;

                    console.log('✅ IP location detected:', {
                        country: data.country_name,
                        timezone: ipBasedTimezone,
                        city: data.city
                    });

                    setVisitorLocation({
                        name: data.country_name?.toUpperCase() || 'UNKNOWN',
                        timezone: ipBasedTimezone,
                        country: data.country_name || 'Unknown'
                    });

                } catch (apiError) {
                    console.warn('⚠️ IP API failed, falling back to browser timezone:', apiError.message);

                    // Fallback to browser timezone if IP API fails
                    const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    const locationName = browserTimezone.split('/')[0]?.toUpperCase() || 'UNKNOWN';

                    console.log('✅ Browser timezone fallback:', {
                        country: locationName,
                        timezone: browserTimezone,
                        city: locationName
                    });

                    setVisitorLocation({
                        name: locationName,
                        timezone: browserTimezone,
                        country: 'Unknown'
                    });
                }
            } catch (error) {
                console.error('❌ Location detection completely failed:', error.message);
                console.log('✅ Using default UTC location');

                setVisitorLocation({
                    name: 'UNKNOWN',
                    timezone: 'UTC',
                    country: 'Unknown'
                });
            }
        };

        detectVisitorLocation();
    }, []);

    // Combined locations array (visitor + project clients) - memoized to prevent infinite loops
    const allLocations = useMemo(() => {
        return visitorLocation 
            ? [visitorLocation, ...projectClients]
            : projectClients;
    }, [visitorLocation, projectClients]);

    // Update time every second
    useEffect(() => {
        const updateTime = () => {
            if (allLocations.length === 0) return;
            
            const now = new Date();
            const location = allLocations[currentLocationIndex];
            if (!location) return;
            
            const localTime = new Date(now.toLocaleString("en-US", {timeZone: location.timezone}));
            setCurrentTime(localTime);
        };

        const interval = setInterval(updateTime, 1000);
        updateTime(); // Initial call

        return () => clearInterval(interval);
    }, [currentLocationIndex, allLocations]);

    // Auto-cycle through locations every 5 seconds
    useEffect(() => {
        if (allLocations.length <= 1) return;

        const locationInterval = setInterval(() => {
            cycleLocation();
        }, 10000); // 5 seconds

        return () => clearInterval(locationInterval);
    }, [allLocations.length]);

    // Animation for time/location changes
    useEffect(() => {
        if (timeRef.current && locationRef.current) {
            gsap.fromTo(
                [timeRef.current, locationRef.current],
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
            );
        }
    }, [currentLocationIndex]);

    // Cycle through locations on click
    const cycleLocation = () => {
        setCurrentLocationIndex(prev => (prev + 1) % allLocations.length);
    };

    return {
        currentTime,
        currentLocationIndex,
        allLocations,
        timeRef,
        locationRef,
        formatTime,
        cycleLocation,
        visitorLocation
    };
};
