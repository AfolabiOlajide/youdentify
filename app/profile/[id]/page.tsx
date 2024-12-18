"use client";
import NavBar from "@/components/navbar/NavBar";
import ProfileSection from "./user-profile";
// import Footer from "@/components/footer";

const Profile = ({ params }: { params: { id: any } }) => {
    return (
        <div className="">
            <NavBar />
            <ProfileSection param={params.id} />
            {/* <Footer /> */}
        </div>
    );
};

export default Profile;
