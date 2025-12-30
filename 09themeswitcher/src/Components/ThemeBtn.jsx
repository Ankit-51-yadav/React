import React from 'react';
import useTheme from '../Contexts/Theme';

export default function ThemeBtn() {

     const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer group">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === 'dark'}
                
            />
            <div className="w-14 h-7 bg-gradient-to-r from-blue-400 to-purple-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gradient-to-r dark:from-gray-600 dark:to-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500 flex items-center justify-between px-1">
                <span className="text-xs text-white">☀️</span>
                <span className="text-xs text-white">🌙</span>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {themeMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </span>
        </label>
    );
}

