import React from 'react';

function Account() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">My Account</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <p className="mt-1 text-lg">Ankiiy</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 text-lg">ankiiy@example.com</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">GitHub</label>
                        <a href="https://github.com/ankiiy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            github.com/ankiiy
                        </a>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bio</label>
                        <p className="mt-1">React developer learning and building awesome projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;