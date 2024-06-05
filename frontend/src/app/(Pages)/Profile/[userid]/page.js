// src/app/(Pages)/Profile/[userid]/page.js

const UserProfile = async ({ params }) => {
    const { userid } = params;
    return (
        <div>
            <h1>User Profile</h1>
            <p>ID: {userid}</p>
        </div>
    );
};

export default UserProfile;
