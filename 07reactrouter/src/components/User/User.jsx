import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${userId}`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const data = await response.json();
                setUserData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    if (loading) {
        return <div className='bg-gray-600 text-white p-4 text-center font-bold text-2xl'>Loading...</div>;
    }

    if (error) {
        return <div className='bg-red-600 text-white p-4 text-center font-bold text-2xl'>Error: {error}</div>;
    }

    return (
        <div className='bg-gray-600 text-white p-4 text-center font-bold text-2xl min-h-screen'>
            <h1>GitHub User: {userId}</h1>
            {userData && (
                <div className="mt-8">
                    <img src={userData.avatar_url} alt={userData.login} className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <h2 className="text-xl">{userData.name || userData.login}</h2>
                    <p>{userData.bio}</p>
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                    <p>Public Repos: {userData.public_repos}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                        View on GitHub
                    </a>
                </div>
            )}
        </div>
    );
}

export default User;