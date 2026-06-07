(function() {
    'use strict';

    /**
     * Validates a geocache key.
     * Must be exactly 6 alphanumeric characters (A-Z, 0-9).
     */
    function isValidKey(key) {
        if (!key || typeof key !== 'string') {
            return false;
        }
        return /^[A-Za-z0-9]{6}$/.test(key);
    }

    /**
     * Extracts the 'key' query parameter from the URL.
     */
    function getKeyFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('key');
    }

    /**
     * Displays the key or hides everything for blank state.
     */
    function displayKey() {
        const keyDisplay = document.getElementById('key-display');
        const instructions = document.getElementById('instructions');
        const key = getKeyFromUrl();

        if (isValidKey(key)) {
            keyDisplay.textContent = key.toUpperCase();
        } else {
            // Blank state: hide both key box and instructions
            keyDisplay.textContent = '';
            instructions.classList.add('hidden');
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', displayKey);
    } else {
        displayKey();
    }
})();
