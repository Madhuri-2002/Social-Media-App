import React, { useEffect,useState } from 'react'
import Navbar from 'scenes/navbar'
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendsList from "scenes/widgets/FriendsList";
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const token = useSelector((state) => state.token)
  const { userId } = useParams()
  const [user, setUser] = useState("")
  const { _id, picturePath } = useSelector((state) => state.user);
  
  const getUsers = async() => {
    const response = await fetch(`http://localhost:5050/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
    const d = await response.json()
    setUser(d)
  }
  useEffect(() => {
    getUsers()
  }, [])
  // if (!user) return null;
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* LEFT SIDE  */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
        </Box>

        {/* CENTER */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {_id == userId && <MyPostWidget picturePath={picturePath} />}
          <PostsWidget userId={userId}  isProfile/>
        </Box>

        {/* RIGHT SIDE */}
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendsList userId={userId} />
          </Box>
        )}
      </Box>
    </Box>
    
  )
}

export default ProfilePage